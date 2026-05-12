const rateLimit = require("express-rate-limit");

// rate limit
const leadLimiter = rateLimit({
  windowMs: 15 * 60 * 1000, // 15 minutes
  max: 5, // max 5 requests
  message: {
    error: "Too many submissions. Please try again later.",
  },
  standardHeaders: true,
  legacyHeaders: false,
});

module.exports = {
  leadLimiter,
};
