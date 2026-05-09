const express = require("express");
const { createAudit } = require("../controllers/Audit.controller");

const routes = express.Router();

// all route will be here
routes.post("/hello", createAudit);

module.exports = routes;
