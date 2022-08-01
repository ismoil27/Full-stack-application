const mysql = require("mysql2");

const db = mysql.createPool({
  host: "localhost",
  user: "webroot",
  password: "1111111!",
  database: "newdb",
});

module.exports = db;
