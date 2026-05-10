const { PRICING_DATA, ALTERNATIVES } = require("../data/PricingData");

const MIN_FEATURE_SCORE = 80;
const OVERPAY_LIMIT = 1.15;
const UNDERPAY_LIMIT = 0.85;

// Helpers

function usd(value) {
  return `$${value.toFixed(2)}`;
}

function percentageDiff(actual, market) {
  const diff = ((actual - market) / market) * 100;

  if (diff > 0) {
    return `+${diff.toFixed(0)}%`;
  }

  return `${diff.toFixed(0)}%`;
}

// Main Tool Evaluation

function evaluateTool(tool) {
  const { name, currentPlan, monthlyCost, teamSize, useCase } = tool;

  // Step 1 — Validate Tool

  const toolData = PRICING_DATA[name];

  if (!toolData) {
    return {
      tool: name,
      plan: currentPlan,
      verdict: "UNKNOWN_TOOL",
      reasoning: `${name} is not available in the pricing registry.`,
      action: "Add this tool manually before running the audit again.",
      monthlySavings: 0,
      yearlySavings: 0,
    };
  }

  const planData = toolData[currentPlan];

  if (!planData) {
    return {
      tool: name,
      plan: currentPlan,
      verdict: "INVALID_PLAN",
      reasoning: `${currentPlan} plan was not found for ${name}.`,
      action: "Check the selected plan name.",
      monthlySavings: 0,
      yearlySavings: 0,
    };
  }

  // Usage based plans cannot be compared properly
  if (
    planData.billingType === "usage_based" ||
    planData.pricePerUser === null
  ) {
    return {
      tool: name,
      plan: currentPlan,
      verdict: "USAGE_BASED_PRICING",
      reasoning:
        `${name} ${currentPlan} uses usage-based or negotiated pricing, ` +
        `so there is no fixed seat price to compare.`,
      action: "Compare invoice history manually before making decisions.",
      monthlySavings: 0,
      yearlySavings: 0,
    };
  }

  // Step 2 — Team Size Check

  if (teamSize > planData.maxTeam) {
    return {
      tool: name,
      plan: currentPlan,
      verdict: "TEAM_LIMIT_EXCEEDED",
      reasoning:
        `${name} ${currentPlan} supports maximum ${planData.maxTeam} users, ` +
        `but your team has ${teamSize} users.`,
      action: `Upgrade to a higher ${name} plan.`,
      monthlySavings: 0,
      yearlySavings: 0,
    };
  }

  if (teamSize < planData.minTeam) {
    return {
      tool: name,
      plan: currentPlan,
      verdict: "PLAN_OVERKILL",
      reasoning:
        `${name} ${currentPlan} requires minimum ${planData.minTeam} seats, ` +
        `but your team only has ${teamSize} users.`,
      action: "Consider switching to a smaller plan.",
      monthlySavings: 0,
      yearlySavings: 0,
    };
  }

  // Step 3 — Market Rate Check

  const marketPrice = planData.pricePerUser;

  // Overpaying
  if (monthlyCost > marketPrice * OVERPAY_LIMIT) {
    const monthlySavings = (monthlyCost - marketPrice) * teamSize;

    return {
      tool: name,
      plan: currentPlan,
      verdict: "OVERPAYING",
      reasoning:
        `You are paying ${usd(monthlyCost)}/user while the public market rate is ` +
        `${usd(marketPrice)}/user (${percentageDiff(monthlyCost, marketPrice)} above market). ` +
        `This creates approximately ${usd(monthlySavings)}/month in excess spend.`,
      action: `Try renegotiating your ${name} contract.`,
      monthlySavings,
      yearlySavings: monthlySavings * 12,
    };
  }

  // Good negotiated pricing
  if (monthlyCost < marketPrice * UNDERPAY_LIMIT) {
    const negotiatedSavings = (marketPrice - monthlyCost) * teamSize;

    return {
      tool: name,
      plan: currentPlan,
      verdict: "NEGOTIATED_DEAL",
      reasoning:
        `You are paying ${usd(monthlyCost)}/user which is ` +
        `${percentageDiff(monthlyCost, marketPrice)} below market price ` +
        `(${usd(marketPrice)}/user). ` +
        `Your current contract already saves around ` +
        `${usd(negotiatedSavings)}/month.`,
      action: "Keep this contract and review renewal terms carefully.",
      monthlySavings: 0,
      yearlySavings: 0,
    };
  }

  // Step 4 — Alternative Check

  const alternatives = ALTERNATIVES[`${name}|${currentPlan}`] || [];

  for (const alt of alternatives) {
    const altPlan = PRICING_DATA[alt.tool]?.[alt.plan];

    if (!altPlan) continue;

    // Skip low quality alternatives
    if (alt.featureParityScore < MIN_FEATURE_SCORE) {
      continue;
    }

    // Skip expensive alternatives
    if (altPlan.pricePerUser >= monthlyCost) {
      continue;
    }

    // Team size must fit
    if (teamSize < altPlan.minTeam || teamSize > altPlan.maxTeam) {
      continue;
    }

    const monthlySavings = (monthlyCost - altPlan.pricePerUser) * teamSize;

    let useCaseWarning = "";

    if (useCase && !alt.bestForWorkloads?.includes(useCase)) {
      useCaseWarning = ` However, ${alt.tool} may not be the best fit for your "${useCase}" workflow.`;
    }

    return {
      tool: name,
      plan: currentPlan,
      verdict: "SWITCH_RECOMMENDED",
      reasoning:
        `${alt.tool} ${alt.plan} costs ${usd(altPlan.pricePerUser)}/user ` +
        `compared to your current ${usd(monthlyCost)}/user. ` +
        `You could save around ${usd(monthlySavings)}/month ` +
        `with feature parity score ${alt.featureParityScore}/100.` +
        useCaseWarning,
      action: `Switch to ${alt.tool} ${alt.plan}.`,
      alternativeTool: alt.tool,
      alternativePlan: alt.plan,
      monthlySavings,
      yearlySavings: monthlySavings * 12,
    };
  }

  // Step 5 — Current Plan Is Fine

  return {
    tool: name,
    plan: currentPlan,
    verdict: "OPTIMAL",
    reasoning:
      `No better alternative with strong feature parity was found for ` +
      `${name} ${currentPlan}. Current pricing looks reasonable.`,
    action: "No immediate action required.",
    monthlySavings: 0,
    yearlySavings: 0,
  };
}

// Run Full Audit

function runAudit(tools) {
  const results = tools.map(evaluateTool);

  const totalMonthlySavings = results.reduce(
    (sum, item) => sum + item.monthlySavings,
    0,
  );

  const totalYearlySavings = totalMonthlySavings * 12;

  return {
    results,

    summary: {
      totalMonthlySavings,
      totalYearlySavings,
      toolsAudited: results.length,
    },
  };
}

module.exports = {
  runAudit,
  evaluateTool,
};
