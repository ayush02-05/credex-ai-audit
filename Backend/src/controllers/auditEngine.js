// const { PRICING_DATA, ALTERNATIVES } = require("../data/PricingData");

// // Stage 1
// function normalizeAndLookup(tool) {
//   const { name, currentPlan, monthlyCost, teamSize, useCase } = tool;

//   // Gate 1a: Is the tool in our registry at all?
//   if (!PRICING_DATA[name]) {
//     return {
//       ok: false,
//       verdict: "UNKNOWN",
//       confidence: "low",
//       reasoning: `"${name}" is not in our pricing registry. Add it to PRICING_DATA.js with a verified source URL before auditing.`,
//       monthlySavings: 0,
//       yearlySavings: 0,
//       recommendedAction: "Manual review required — tool not catalogued",
//     };
//   }

//   // Gate 1b: Is this specific plan in our registry?
//   const toolData = PRICING_DATA[name];
//   if (!toolData[currentPlan]) {
//     return {
//       ok: false,
//       verdict: "UNKNOWN",
//       confidence: "low",
//       reasoning: `"${name} ${currentPlan}" plan is not in our registry. Known plans: ${Object.keys(toolData).join(", ")}. Verify the plan name and update PRICING_DATA.js.`,
//       monthlySavings: 0,
//       yearlySavings: 0,
//       recommendedAction: "Verify plan name — possible data entry error",
//     };
//   }

//   // Gate 1c: Is pricingPerUser null (enterprise/contact sales)?
//   const planData = toolData[currentPlan];
//   if (planData.pricePerUser === null) {
//     return {
//       ok: false,
//       verdict: "NEGOTIATED",
//       confidence: "low",
//       reasoning: `"${name} ${currentPlan}" is an enterprise plan with negotiated pricing. Cannot evaluate without the actual contract rate.`,
//       monthlySavings: 0,
//       yearlySavings: 0,
//       recommendedAction: "Request contract details to complete this audit line",
//     };
//   }

//   return { ok: true, toolData, planData };
// }

// // Stage 2
// function checkPlanFit(tool, planData) {
//   const { name, currentPlan, teamSize, monthlyCost } = tool;
//   const { minTeam, maxTeam, pricePerUser } = planData;

//   // Too many people for this plan tier
//   if (teamSize > maxTeam) {
//     return {
//       ok: false,
//       verdict: "PLAN_UNDERMATCH",
//       confidence: "high",
//       reasoning: `${name} ${currentPlan} supports up to ${maxTeam} users but you have ${teamSize}. You may be violating ToS or missing features designed for your scale.`,
//       monthlySavings: 0,
//       yearlySavings: 0,
//       recommendedAction: `Upgrade to ${name}'s next tier — contact vendor`,
//     };
//   }

//   // Too few people — overkill plan
//   if (teamSize < minTeam) {
//     // Find the right plan within the same tool
//     const toolData = PRICING_DATA[name];
//     const betterPlan = Object.entries(toolData).find(
//       ([planName, data]) =>
//         planName !== currentPlan &&
//         teamSize >= data.minTeam &&
//         teamSize <= data.maxTeam &&
//         data.pricePerUser !== null &&
//         data.pricePerUser < pricePerUser,
//     );

//     if (betterPlan) {
//       const [betterPlanName, betterPlanData] = betterPlan;
//       const saving = (pricePerUser - betterPlanData.pricePerUser) * teamSize;
//       return {
//         ok: false,
//         verdict: "PLAN_OVERKILL",
//         confidence: "high",
//         reasoning: `${name} ${currentPlan} requires min ${minTeam} users but your team has ${teamSize}. ${name} ${betterPlanName} at $${betterPlanData.pricePerUser}/user covers your team size and saves $${saving.toFixed(2)}/month.`,
//         monthlySavings: saving,
//         yearlySavings: saving * 12,
//         recommendedAction: `Downgrade to ${name} ${betterPlanName} ($${betterPlanData.pricePerUser}/user)`,
//         source: betterPlanData.source,
//       };
//     }
//   }

//   return { ok: true };
// }

// // stage 3
// function checkMarketRate(tool, planData) {
//   const { name, currentPlan, monthlyCost, teamSize } = tool;
//   const marketRate = planData.pricePerUser;
//   const paidPerUser = monthlyCost; // what they entered per user

//   const priceDiff = paidPerUser - marketRate;
//   const pctDiff = priceDiff / marketRate;

//   // Paying 15% + below market → they have a negotiated deal, don't touch it
//   if (paidPerUser < marketRate * 0.85) {
//     // const vsMarket = (marketRate - paidPerUser) * teamSize;
//     return {
//       ok: false,
//       verdict: "BELOW_MARKET",
//       confidence: "high",
//       reasoning: `You're paying $${paidPerUser}/user vs the standard $${marketRate}/user for ${name} ${currentPlan}. That's ${Math.round((1 - paidPerUser / marketRate) * 100)}% below market rate — you have a negotiated deal. Do not switch; you'd lose this pricing.`,
//       monthlySavings: 0,
//       yearlySavings: 0,
//       recommendedAction: "Keep current contract — already below market",
//     };
//   }

//   // Paying 15%+ above market → flag it (reseller markup, outdated billing)
//   if (paidPerUser > marketRate * 1.15) {
//     return {
//       ok: false,
//       verdict: "ABOVE_MARKET",
//       confidence: "medium",
//       reasoning: `You're paying $${paidPerUser}/user but the current listed price is $${marketRate}/user for ${name} ${currentPlan}. This suggests a reseller markup or an outdated plan. Contact the vendor to renegotiate.`,
//       monthlySavings: (paidPerUser - marketRate) * teamSize,
//       yearlySavings: (paidPerUser - marketRate) * teamSize * 12,
//       recommendedAction: `Renegotiate with ${name} — current list price is $${marketRate}/user`,
//       source: planData.source,
//     };
//   }

//   return { ok: true };
// }

// // stage 4
// function checkAlternatives(tool) {
//   const { name, currentPlan, monthlyCost, teamSize } = tool;

//   const key = `${name}|${currentPlan}`;
//   const alternatives = ALTERNATIVES[key] || [];

//   // No alternatives
//   if (alternatives.length === 0) {
//     return {
//       verdict: "OPTIMAL",
//       confidence: "medium",
//       reasoning: `No catalogued alternatives for ${name} ${currentPlan}. Current plan is the best known option for this use case.`,
//       monthlySavings: 0,
//       yearlySavings: 0,
//       recommendedAction: "Keep current plan",
//     };
//   }

//   // Find first cheaper valid alternative
//   for (const alt of alternatives) {
//     const altData = PRICING_DATA[alt.tool]?.[alt.plan];

//     if (!altData || altData.pricePerUser === null) {
//       continue;
//     }

//     // Skip weak alternatives
//     if (alt.featureParityScore < 80) {
//       continue;
//     }

//     // Skip if not cheaper
//     if (altData.pricePerUser >= monthlyCost) {
//       continue;
//     }

//     // Skip if team size doesn't fit
//     if (teamSize < altData.minTeam || teamSize > altData.maxTeam) {
//       continue;
//     }

//     const monthlySavings = (monthlyCost - altData.pricePerUser) * teamSize;

//     return {
//       verdict: "SWITCH_RECOMMENDED",
//       reasoning: `${alt.tool} ${alt.plan} is cheaper and offers similar features.`,
//       recommendedAction: `Switch to ${alt.tool} ${alt.plan}`,
//       alternativeTool: alt.tool,
//       alternativePlan: alt.plan,
//       monthlySavings,
//       yearlySavings: monthlySavings * 12,
//     };
//   }

//   // No strong alternative found
//   return {
//     verdict: "OPTIMAL",
//     reasoning: "Current plan already looks cost-effective.",
//     recommendedAction: "Keep current plan",
//     monthlySavings: 0,
//     yearlySavings: 0,
//   };
// }

// // Build metadata to result
// function buildResult(tool, result) {
//   return {
//     toolName: tool.name,
//     currentPlan: tool.currentPlan,
//     monthlyCostPerUser: tool.monthlyCost,
//     teamSize: tool.teamSize,
//     useCase: tool.useCase,
//     totalMonthlySpend: tool.monthlyCost * tool.teamSize,
//     ...result,
//     monthlySavings: result.monthlySavings || 0,
//     yearlySavings: result.yearlySavings || 0,
//   };
// }

// // Evaluate
// function evaluate(tool) {
//   // Call stage1
//   const lookup = normalizeAndLookup(tool);
//   if (!lookup.ok) return buildResult(tool, lookup);

//   // Call stage2
//   const { planData } = lookup;
//   const fitcheck = checkPlanFit(tool, planData);
//   if (!fitcheck.ok) return buildResult(tool, fitcheck);

//   // Call stage3
//   const priceCheck = checkMarketRate(tool, planData);
//   if (!priceCheck.ok) return buildResult(tool, priceCheck);

//   // Call Stage4
//   const altResult = checkAlternatives(tool, planData);
//   return buildResult(tool, altResult);
// }

// function runAudit(tools) {
//   const results = tools.map(evaluateTool);

//   const totalMonthlySavings = results.reduce(
//     (sum, r) => sum + r.monthlySavings,
//     0,
//   );
//   const totalYearlySavings = results.reduce(
//     (sum, r) => sum + r.yearlySavings,
//     0,
//   );
//   const totalCurrentSpend = results.reduce(
//     (sum, r) => sum + r.totalMonthlySpend,
//     0,
//   );

//   // Confidence of the overall audit
//   const lowConfidenceCount = results.filter(
//     (r) => r.confidence === "low",
//   ).length;
//   const overallConfidence =
//     lowConfidenceCount > results.length / 2 ? "low" : "medium";

//   return {
//     results,
//     totalMonthlySavings,
//     totalYearlySavings,
//     totalCurrentSpend,
//     overallConfidence,
//     disclaimer:
//       "Savings estimates are based on publicly listed pricing as of audit date. Negotiate actual contracts before making changes. Low-confidence items require manual verification.",
//   };
// }

const { PRICING_DATA, ALTERNATIVES } = require("../data/PricingData");

// Stage 1 - Validate Tool

function validateTool(tool) {
  const { name, currentPlan } = tool;

  const toolData = PRICING_DATA[name];

  if (!toolData) {
    return {
      ok: false,
      verdict: "UNKNOWN_TOOL",
      reasoning: `${name} is not available in our pricing database.`,
      action: "Add tool data manually",
    };
  }

  const planData = toolData[currentPlan];

  if (!planData) {
    return {
      ok: false,
      verdict: "INVALID_PLAN",
      reasoning: `${currentPlan} plan was not found for ${name}.`,
      action: "Check plan name",
    };
  }

  if (planData.pricePerUser === null) {
    return {
      ok: false,
      verdict: "CUSTOM_PRICING",
      reasoning: `${name} ${currentPlan} uses custom enterprise pricing.`,
      action: "Manual review required",
    };
  }

  return {
    ok: true,
    planData,
  };
}

// Stage 2 - Check Team Size

function checkTeamSize(tool, planData) {
  const { name, currentPlan, teamSize } = tool;

  if (teamSize > planData.maxTeam) {
    return {
      ok: false,
      verdict: "UPGRADE_NEEDED",
      reasoning: `${currentPlan} supports only ${planData.maxTeam} users.`,
      action: `Upgrade your ${name} plan`,
    };
  }

  if (teamSize < planData.minTeam) {
    return {
      ok: false,
      verdict: "PLAN_OVERKILL",
      reasoning: `${currentPlan} is too large for your current team.`,
      action: "Move to a smaller plan",
    };
  }

  return { ok: true };
}

// Stage 3 - Check Pricing

function checkPricing(tool, planData) {
  const { name, currentPlan, monthlyCost, teamSize } = tool;

  const marketPrice = planData.pricePerUser;

  // Paying too much
  if (monthlyCost > marketPrice * 1.15) {
    const savings = (monthlyCost - marketPrice) * teamSize;

    return {
      ok: false,
      verdict: "OVERPAYING",
      reasoning: `Your current pricing is higher than the latest public pricing for ${name} ${currentPlan}.`,
      action: "Review current billing and compare available plans",
      monthlySavings: savings,
      yearlySavings: savings * 12,
    };
  }

  // Good negotiated pricing
  if (monthlyCost < marketPrice * 0.85) {
    return {
      ok: false,
      verdict: "GOOD_DEAL",
      reasoning: "You already have discounted pricing.",
      action: "Keep current contract",
    };
  }

  return { ok: true };
}

// Stage 4 - Check Alternatives

function checkAlternatives(tool) {
  const { name, currentPlan, monthlyCost, teamSize } = tool;

  const key = `${name}|${currentPlan}`;
  const alternatives = ALTERNATIVES[key] || [];

  for (const alt of alternatives) {
    const altData = PRICING_DATA[alt.tool]?.[alt.plan];

    if (!altData) continue;

    // Skip custom enterprise plans
    if (altData.pricePerUser === null) continue;

    // Weak alternative
    if (alt.featureParityScore < 80) continue;

    // Not cheaper
    if (altData.pricePerUser >= monthlyCost) continue;

    // Team size mismatch
    if (teamSize < altData.minTeam || teamSize > altData.maxTeam) {
      continue;
    }

    const savings = (monthlyCost - altData.pricePerUser) * teamSize;

    return {
      verdict: "SWITCH_TOOL",
      reasoning: `${alt.tool} ${alt.plan} is cheaper with similar features.`,
      action: `Switch to ${alt.tool} ${alt.plan}`,
      alternativeTool: alt.tool,
      alternativePlan: alt.plan,
      monthlySavings: savings,
      yearlySavings: savings * 12,
    };
  }

  return {
    verdict: "OPTIMAL",
    reasoning: "Current setup already looks good.",
    action: "Keep current plan",
    monthlySavings: 0,
    yearlySavings: 0,
  };
}

// Final Result Builder

function buildResult(tool, result) {
  return {
    tool: tool.name,
    plan: tool.currentPlan,
    teamSize: tool.teamSize,
    monthlyCostPerUser: tool.monthlyCost,
    totalMonthlySpend: tool.monthlyCost * tool.teamSize,

    ...result,

    monthlySavings: result.monthlySavings || 0,
    yearlySavings: result.yearlySavings || 0,
  };
}

// Main Audit Function

function evaluateTool(tool) {
  const validation = validateTool(tool);

  if (!validation.ok) {
    return buildResult(tool, validation);
  }

  const { planData } = validation;

  const teamCheck = checkTeamSize(tool, planData);

  if (!teamCheck.ok) {
    return buildResult(tool, teamCheck);
  }

  const pricingCheck = checkPricing(tool, planData);

  if (!pricingCheck.ok) {
    return buildResult(tool, pricingCheck);
  }

  const altCheck = checkAlternatives(tool);

  return buildResult(tool, altCheck);
}

// Run Full Audit

function runAudit(tools) {
  const results = tools.map(evaluateTool);

  const totalMonthlySavings = results.reduce(
    (sum, item) => sum + item.monthlySavings,
    0,
  );

  const totalYearlySavings = results.reduce(
    (sum, item) => sum + item.yearlySavings,
    0,
  );

  return {
    results,
    totalMonthlySavings,
    totalYearlySavings,
  };
}

module.exports = {
  runAudit,
};
