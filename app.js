const express = require("express");
const dotenv = require("dotenv").config();
const db = require("./config/db");

// const { errorHandler } = require("./middleware/errorMiddleware");
const port = process.env.PORT || 5000;

const app = express();

// try {
//   app.use(express.json());

//   app.use(express.urlencoded({ extended: false }));

//   // Routes
//   app.use("/api/blogs", require("./routes/blogRoutes"));
//   app.use("/api/v1/setData", require("./routes/blogRoutes"));
//   app.use("/", require("./routes/blogRoutes"));
// } catch (err) {
//   console.log(err);
// }

// app.use(errorHandler);

// Routes started from scratch

// Get all blogs
app.get("/api/blogs", (req, res) => {
  //  res.status(200).json({ message: "All blogs" });
  const sqlGet = "SELECT * FROM blogs";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
});

// Get single blog
app.get("/api/blogs/:id", (req, res) => {
  // res.status(200).json({ message: `Update blog ${req.params.id}` });
  const { id } = req.params;
  const sqlGetSingle = "SELECT * FROM blogs WHERE id = ?";
  db.query(sqlGetSingle, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
});

//  Set blog
app.post(`/api/blogs`, (req, res) => {
  // res.status(200).json({ message: "Post blogs" });
  const { title, snippet, body } = req.body;
  const sqlInsert = "INSERT INTO blogs (title, snippet, body) VALUES(?, ?, ?)";
  db.query(sqlInsert, [title, snippet, body], (err, result) => {
    if (err) {
      console.log("err", err);
    }
  });
  res.status(200).json({ message: req.body });
});

// Update blog
app.put("/api/blogs/:id", (req, res) => {
  const { id } = req.params;
  const { title, snippet, body } = req.body;
  const sqlUpdate =
    "UPDATE blogs SET title = ?, snippet = ?, body = ? WHERE id = ?";
  db.query(sqlUpdate, [title, snippet, body, id], (err, result) => {
    if (err) {
      console.log(err);
    }
    // res.status(200).send(`Updated ${result}`);
  });
  res.status(200).json({ message: `Blog updated with id: ${req.params.id}` });
});

// Delete blog

app.delete("/api/blogs/:id", (req, res) => {
  // res.status(200).json({ message: `Delete blog ${req.params.id}` });
  const { id } = req.params;
  const sqlDelete = "DELETE FROM blogs WHERE id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log("err", err);
    }
  });
  res.status(200).json({ message: `Blog deleted with id:  ${req.params.id}` });
});

app.listen(port, () => console.log(`Server listening on port ${port}`));
