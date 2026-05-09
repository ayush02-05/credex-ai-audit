const express = require("express");
const AuditRoute = require("./routes/Audit.routes");

// create a server
const app = express();

// middlewareas
app.use(express.json());
app.use("/audit", AuditRoute);

module.exports = app;
