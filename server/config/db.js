const mysql = require("mysql");

/**
 * setup MySQL connection with secure configurations
 * preventing SQL injection by disallowing multiple statements
 */
const db = mysql.createPool({
  host: process.env.DB_HOST || "127.0.0.1",
  user: process.env.DB_USER || "root",
  password: process.env.DB_PASSWORD || "",
  database: process.env.DB_NAME || "connectpub",
  multipleStatements: false,
});

module.exports = db;
