const mongoose = require("mongoose");

const auditSchema = new mongoose.Schema({
  tools: [
    {
      tool: String,
      plan: String,
      verdict: String,
      reasoning: String,
      action: String,

      alternativeTool: String,
      alternativePlan: String,

      monthlySavings: Number,
      yearlySavings: Number,
    },
  ],
  totalMonthlySavings: Number,
  totalYearlySavings: Number,

  aiSummary: String,
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Audit", auditSchema);
