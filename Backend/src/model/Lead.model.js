const mongoose = require("mongoose");

const leadSchema = new mongoose.Schema({
  auditId: { type: String, required: true },
  name: String,
  email: { type: String, required: true },
  company: String,
  role: String,
  teamSize: String,

  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("Lead", leadSchema);
