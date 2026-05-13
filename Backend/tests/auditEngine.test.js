const { evaluateTool, runAudit } = require("../src/controllers/auditEngine");

describe("auditEngine.evaluateTool", () => {
  test("returns UNKNOWN_TOOL when tool name not in registry", () => {
    const result = evaluateTool({
      name: "NotARealTool",
      currentPlan: "Whatever",
      monthlyCost: 10,
      teamSize: 1,
      useCase: "coding",
    });

    expect(result.verdict).toBe("UNKNOWN_TOOL");
    expect(result.monthlySavings).toBe(0);
    expect(result.yearlySavings).toBe(0);
  });

  test("returns INVALID_PLAN when plan name not found", () => {
    const result = evaluateTool({
      name: "ChatGPT",
      currentPlan: "DefinitelyNotAPlan",
      monthlyCost: 20,
      teamSize: 1,
      useCase: "mixed",
    });

    expect(result.verdict).toBe("INVALID_PLAN");
  });

  test("returns USAGE_BASED_PRICING for usage-based API tiers", () => {
    const result = evaluateTool({
      name: "OpenAI API",
      currentPlan: "PAYG",
      monthlyCost: 50,
      teamSize: 3,
      useCase: "data",
    });

    expect(result.verdict).toBe("USAGE_BASED_PRICING");
  });

  test("returns TEAM_LIMIT_EXCEEDED when team exceeds plan max", () => {
    const result = evaluateTool({
      name: "ChatGPT",
      currentPlan: "Plus",
      monthlyCost: 20,
      teamSize: 2,
      useCase: "research",
    });

    expect(result.verdict).toBe("TEAM_LIMIT_EXCEEDED");
  });

  test("returns PLAN_OVERKILL when team is below plan min", () => {
    const result = evaluateTool({
      name: "ChatGPT",
      currentPlan: "Team",
      monthlyCost: 30,
      teamSize: 1,
      useCase: "mixed",
    });

    expect(result.verdict).toBe("PLAN_OVERKILL");
  });

  test("returns OVERPAYING when monthlyCost/user is far above market", () => {
    const result = evaluateTool({
      name: "Cursor",
      currentPlan: "Pro",
      monthlyCost: 30,
      teamSize: 5,
      useCase: "coding",
    });

    expect(result.verdict).toBe("OVERPAYING");
    expect(result.monthlySavings).toBe(50);
    expect(result.yearlySavings).toBe(600);
  });

  test("returns NEGOTIATED_DEAL when monthlyCost/user is far below market", () => {
    const result = evaluateTool({
      name: "Cursor",
      currentPlan: "Pro",
      monthlyCost: 15,
      teamSize: 5,
      useCase: "coding",
    });

    expect(result.verdict).toBe("NEGOTIATED_DEAL");
    expect(result.monthlySavings).toBe(0);
  });

  test("returns SWITCH_RECOMMENDED when a strong parity alternative is same price but better fit", () => {
    const result = evaluateTool({
      name: "ChatGPT",
      currentPlan: "Plus",
      monthlyCost: 20,
      teamSize: 1,
      useCase: "writing",
    });

    expect(result.verdict).toBe("SWITCH_RECOMMENDED");
    expect(result.alternativeTool).toBe("Claude");
    expect(result.alternativePlan).toBe("Pro");
  });

  test("returns OPTIMAL when no same-or-cheaper alternative qualifies", () => {
    const result = evaluateTool({
      name: "Windsurf",
      currentPlan: "Pro",
      monthlyCost: 15,
      teamSize: 3,
      useCase: "coding",
    });

    expect(result.verdict).toBe("OPTIMAL");
    expect(result.alternativeTool).toBe("Windsurf");
    expect(result.monthlySavings).toBe(0);
  });
});

describe("auditEngine.runAudit", () => {
  test("aggregates savings across tools", () => {
    const audit = runAudit([
      {
        name: "Cursor",
        currentPlan: "Pro",
        monthlyCost: 30,
        teamSize: 5,
        useCase: "coding",
      },
      {
        name: "OpenAI API",
        currentPlan: "PAYG",
        monthlyCost: 100,
        teamSize: 2,
        useCase: "data",
      },
    ]);

    expect(audit.toolsAudited).toBe(2);
    expect(audit.totalMonthlySavings).toBe(50);
    expect(audit.totalYearlySavings).toBe(600);
    expect(audit.results).toHaveLength(2);
  });
});
