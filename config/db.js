const mysql = require("mysql2");

const db = mysql.createPool({
  // host: "localhost",
  user: "root",
  password: "xpavm007",
  database: "test",
});

module.exports = db;
