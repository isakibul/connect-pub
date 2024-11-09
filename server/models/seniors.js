const db = require("../config/db");

/**
 * Create table query
 */
const createTableQuery = `
  CREATE TABLE IF NOT EXISTS seniors (
    id INT AUTO_INCREMENT PRIMARY KEY,
    fullName VARCHAR(50) NOT NULL,
    avatar VARCHAR(250) NOT NULL,
    address VARCHAR(100) NOT NULL,
    position VARCHAR(50) NOT NULL,
    industry VARCHAR(50) NOT NULL,
    mobileNumber VARCHAR(15) NOT NULL,
    email VARCHAR(50) NOT NULL,
    linkedin VARCHAR(250) NOT NULL,
    createdAt TIMESTAMP DEFAULT CURRENT_TIMESTAMP
  );
`;

db.query(createTableQuery, (err, _result) => {
  if (err) {
    console.error("Error creating seniors table: " + err.stack);
  } else {
    console.log("Seniors table created or already exists");
  }
});

/**
 * Insert into database
 * @param {*} data
 * @param {*} callback
 */
const insertSeniors = (data, callback) => {
  const query = `
    INSERT INTO seniors (fullName, avatar, address, position, industry, mobileNumber, email, linkedin)
    VALUES (?, ?, ?, ?, ?, ?, ?, ?)
  `;
  db.query(query, data, callback);
};

const getAllSeniors = (callback) => {
  db.query("SELECT * FROM seniors", callback);
};

module.exports = { insertSeniors, getAllSeniors };
