const express = require("express");
const { createAudit, getAudit } = require("../controllers/Audit.controller");

const routes = express.Router();

// all route will be here
routes.post("/create", createAudit);
routes.get("/getaudit/:id", getAudit);

module.exports = routes;
