const cors = require("cors");
const helmet = require("helmet");
const rateLimit = require("express-rate-limit");
const xss = require("xss-clean");

module.exports = (app) => {
  /**
   * security middlewares
   */
  app.use(cors());
  app.use(helmet());
  app.use(xss());

  /**
   * rate limiting to prevent brute-force attacks
   * -window time: 30 minutes
   * -limit each IP to 50 requests per window time
   */
  const limiter = rateLimit({
    windowMs: 30 * 60 * 1000,
    max: 50,
    message: (req, res) => {
      console.log(`Rate limit exceeded for IP: ${req.ip}`);
      return res.status(429).json({
        message: "Too many requests from this IP, please try again later",
      });
    },
  });

  app.use(limiter);
};
