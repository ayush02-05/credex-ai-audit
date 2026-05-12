const express = require("express");
const { createLead } = require("../controllers/Lead.controller");

const routes = express.Router();

routes.post("/create", createLead);

module.exports = routes;
