// index.js
const express = require("express");
const dotenv = require("dotenv");
const security = require("./config/security");
const seniorsRoutes = require("./routes/seniors");

dotenv.config();

const app = express();

/**
 * Apply security middleware
 */
security(app);
app.use(express.json());

/**
 * Health check route
 */
app.get("/health", (_req, res) => {
  res.status(200).json({ message: "Health is okay!" });
});

/**
 * Successors API routes
 */
app.use("/api/seniors", seniorsRoutes);

/**
 * Server startup
 */
const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
