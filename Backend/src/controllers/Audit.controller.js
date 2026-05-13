const { runAudit } = require("./auditEngine");
const Audit = require("../model/Audit.model");
const { generate_Ai_Summary } = require("../service/Ai.service");

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
      totalMonthlySavings: auditResult.totalMonthlySavings,
      totalYearlySavings: auditResult.totalYearlySavings,
    });

    await audit.save();
    // Log DB/collection and doc
    console.log(
      "[Audit] Saved to DB:",
      audit.constructor.db.name,
      "/",
      audit.constructor.collection.name,
    );
    console.log("[Audit] Document:", audit.toObject());

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

const getAudit = async (req, res) => {
  try {
    const { id } = req.params;

    const audit = await Audit.findById(id);
    if (!audit) {
      return res.status(404).json({ error: "Audit not found" });
    }

    if (!audit.aiSummary) {
      try {
        const aiSummary = await generate_Ai_Summary(audit);
        audit.aiSummary = aiSummary;

        await audit.save();
      } catch (error) {
        console.error("Claude API error:", error);
        audit.aiSummary = "Unable to generate AI summary at this time.";
      }
    }
    res.status(200).json({
      success: true,
      audit,
    });
  } catch (error) {
    console.error("Get Audit Error:", error);

    return res.status(500).json({
      success: false,
      error: error.message,
    });
  }
};

module.exports = {
  createAudit,
  getAudit,
};
