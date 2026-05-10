const { runAudit } = require("./auditEngine");
const Audit = require("../model/Audit.model");

const VALID_USE_CASES = ["coding", "writing", "research", "data", "mixed"];

const createAudit = async (req, res) => {
  try {
    const { tools } = req.body;

    // Check tools array
    if (!tools || tools.length === 0) {
      return res.status(400).json({
        success: false,
        error: "No tools provided",
      });
    }

    // Validate each tool
    for (let i = 0; i < tools.length; i++) {
      const tool = tools[i];

      if (!tool.name) {
        return res.status(400).json({
          success: false,
          error: `Tool ${i + 1}: name is required`,
        });
      }

      if (!tool.currentPlan) {
        return res.status(400).json({
          success: false,
          error: `Tool ${i + 1}: currentPlan is required`,
        });
      }

      if (
        !tool.teamSize ||
        typeof tool.teamSize !== "number" ||
        tool.teamSize < 1
      ) {
        return res.status(400).json({
          success: false,
          error: `Tool ${i + 1}: valid teamSize is required`,
        });
      }

      if (
        tool.monthlyCost === undefined ||
        typeof tool.monthlyCost !== "number" ||
        tool.monthlyCost < 0
      ) {
        return res.status(400).json({
          success: false,
          error: `Tool ${i + 1}: valid monthlyCost is required`,
        });
      }

      if (tool.useCase && !VALID_USE_CASES.includes(tool.useCase)) {
        return res.status(400).json({
          success: false,
          error: `Tool ${i + 1}: invalid useCase`,
        });
      }
    }

    // Run audit logic
    const auditResult = runAudit(tools);

    // Save to DB
    const audit = new Audit({
      tools: auditResult.results,
      totalMonthlySavings: auditResult.summary.totalMonthlySavings,
      totalYearlySavings: auditResult.summary.totalYearlySavings,
    });

    await audit.save();

    // Response
    return res.status(201).json({
      success: true,
      auditId: audit._id,
      audit: auditResult,
    });
  } catch (error) {
    console.error("Audit Error:", error);

    return res.status(500).json({
      success: false,
      error: "Something went wrong",
    });
  }
};

module.exports = {
  createAudit,
};
