const { PRICING_DATA, ALTERNATIVES } = require("../data/PricingData");

const MIN_FEATURE_SCORE = 80;
const USE_CASE_TOLERANCE = 5;
const MIN_USE_CASE_IMPROVEMENT = 3;
const MIN_QUALITY_IMPROVEMENT = 3;
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
  const currentUseCaseFit = useCase ? (planData.useCaseFit?.[useCase] ?? 0) : 0;
  const currentFeatureScore = planData.featureScore ?? 0;

  const candidates = alternatives
    .map((alt) => {
      const altPlan = PRICING_DATA[alt.tool]?.[alt.plan];

      if (!altPlan) return null;

      // Skip low quality alternatives
      if (alt.featureParityScore < MIN_FEATURE_SCORE) {
        return null;
      }

      // Team size must fit
      if (teamSize < altPlan.minTeam || teamSize > altPlan.maxTeam) {
        return null;
      }

      const altUseCaseFit = useCase ? (altPlan.useCaseFit?.[useCase] ?? 0) : 0;
      const altFeatureScore = altPlan.featureScore ?? 0;
      const isSameOrCheaper = altPlan.pricePerUser <= monthlyCost;
      const hasUseCaseSupport = useCase
        ? alt.bestForWorkloads?.includes(useCase) ||
          altUseCaseFit >= currentUseCaseFit - USE_CASE_TOLERANCE
        : true;

      if (!hasUseCaseSupport || !isSameOrCheaper) {
        return null;
      }

      const monthlySavings = (monthlyCost - altPlan.pricePerUser) * teamSize;
      const useCaseDelta = altUseCaseFit - currentUseCaseFit;
      const qualityDelta = altFeatureScore - currentFeatureScore;

      if (monthlySavings <= 0) {
        if (
          useCase &&
          useCaseDelta < MIN_USE_CASE_IMPROVEMENT &&
          qualityDelta < MIN_QUALITY_IMPROVEMENT
        ) {
          return null;
        }
      }

      return {
        alt,
        altPlan,
        altFeatureScore,
        altUseCaseFit,
        monthlySavings,
        useCaseDelta,
        qualityDelta,
      };
    })
    .filter(Boolean);

  if (candidates.length > 0) {
    candidates.sort((a, b) => {
      if (a.monthlySavings !== b.monthlySavings) {
        return b.monthlySavings - a.monthlySavings;
      }

      if (a.useCaseDelta !== b.useCaseDelta) {
        return b.useCaseDelta - a.useCaseDelta;
      }

      if (a.qualityDelta !== b.qualityDelta) {
        return b.qualityDelta - a.qualityDelta;
      }

      return b.alt.featureParityScore - a.alt.featureParityScore;
    });

    const best = candidates[0];
    const alt = best.alt;
    const altPlan = best.altPlan;
    const monthlySavings = best.monthlySavings;

    let useCaseNote = "";
    if (useCase) {
      const currentFit = currentUseCaseFit;
      const altFit = best.altUseCaseFit;
      if (altFit > currentFit) {
        useCaseNote = ` ${alt.tool} scores ${altFit}/100 for ${useCase}, higher than your current ${currentFit}/100.`;
      } else if (!alt.bestForWorkloads?.includes(useCase)) {
        useCaseNote = ` ${alt.tool} may be a weaker fit for your "${useCase}" workflow.`;
      }
    }

    const savingsNote =
      monthlySavings > 0
        ? `You could save around ${usd(monthlySavings)}/month.`
        : "Pricing is the same, but capability fit is stronger.";

    return {
      tool: name,
      plan: currentPlan,
      verdict: "SWITCH_RECOMMENDED",
      reasoning:
        `${alt.tool} ${alt.plan} costs ${usd(altPlan.pricePerUser)}/user ` +
        `compared to your current ${usd(monthlyCost)}/user. ` +
        `${savingsNote} ` +
        `Feature parity score ${alt.featureParityScore}/100.` +
        useCaseNote,
      action: `Switch to ${alt.tool} ${alt.plan}.`,
      alternativeTool: alt.tool,
      alternativePlan: alt.plan,
      monthlySavings: Math.max(0, monthlySavings),
      yearlySavings: Math.max(0, monthlySavings) * 12,
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
    alternativeTool: name,
    alternativePlan: currentPlan,
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
    totalMonthlySavings,
    totalYearlySavings,
    toolsAudited: results.length,
  };
}

module.exports = {
  runAudit,
  evaluateTool,
};
