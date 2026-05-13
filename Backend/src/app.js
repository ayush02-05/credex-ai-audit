const express = require("express");
const AuditRoute = require("./routes/Audit.routes");
const LeadRoutes = require("./routes/Lead.routes");

const Cors = require("cors");
const { leadLimiter } = require("./middlewares/AbuseProtection.middleware");

// create a server
const app = express();

// middlewareas
app.use(express.json());
app.use(
  Cors({
    origin: "*",
    credentials: true,
  }),
);
// Audit
app.use("/audit", AuditRoute);
// Lead
app.use("/lead", leadLimiter, LeadRoutes);

module.exports = app;
