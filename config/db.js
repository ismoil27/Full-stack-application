const mysql = require("mysql");
const fs = require("fs");

const contents = fs.readFileSync("./config/db-config.json", "utf8");

const conf = JSON.parse(contents.toString());

const db = mysql.createPool({
  connectionLimit: conf.connectionLimit,
  multipleStatements: true,
  host: conf.host,
  port: parseInt(conf.port),
  user: conf.user,
  password: conf.password,
  database: conf.database,
});

module.exports = db;
