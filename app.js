const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db");

const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

app.use(express.json());

app.use(express.urlencoded({ extended: false }));

// app.use("/api/blogs", require("./routes/blogRoutes"));
// app.use("/api/v1/setData", require("./routes/blogRoutes"));
// app.use("/", require("./routes/blogRoutes"));

app.get("/", (req, res) => {
  res.send("Hello World");
});

// app.get("/api/v1/data", (req, res) => {});

// app.get("/api/v1", (req, res) => {
//   const sqlInsert =
//     "INSERT INTO blogs (title, snippet, body) VALUES ('john doe', 'jack ma is the owner of this blog', 'bal bla bla bla bla text') ";
//   db.query(sqlInsert, (err, result) => {
//     // console.log("error", err);
//     // console.log("result", result);
//     res.send("Hello World");
//   });
// });

app.use(errorHandler);

app.listen(port, () => console.log(`Server listening on port ${port}`));
