const fs = require("fs");
const path = require("path");

const db = require("../config/db");

// let data = fs.readFileSync(path.join("data", "blogs.json"), "utf-8");
// data = data ? JSON.parse(data) : [];

// Get all blogs
const getBlogs = (req, res) => {
  //  res.status(200).json({ message: "All blogs" });

  const sqlGet = "SELECT * FROM blogs";
  db.query(sqlGet, (err, result) => {
    res.status(200).send(result);
  });
};

// Get single blog
const getBlog = (req, res) => {
  const { id } = req.params;
  const sqlGetSingle = "SELECT * FROM blogs WHERE id = ?";
  db.query(sqlGetSingle, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.status(200).send(result);
  });
};

//  Set blog
const setBlog = (req, res) => {
  // res.status(200).json({ message: "Post blogs" });
  const { title, snippet, body } = req.body;
  const sqlInsert = "INSERT INTO blogs (title, snippet, body) VALUES(?, ?, ?)";
  db.query(sqlInsert, [title, snippet, body], (err, result) => {
    if (err) {
      console.log("err", err);
    }
  });

  // let jsonData = {
  //   id: data.length ? data.length + 1 : 1,
  //   title,
  //   snippet,
  //   body,
  // };

  fs.writeFileSync(
    path.join("data", "blogs.json"),
    JSON.stringify(jsonData, null, 4)
  );

  res.status(200).json({ message: req.body });
};

// Update blog
const updateBlog = (req, res) => {
  // res.status(200).json({ message: `Update blog ${req.params.id}` });

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
};

// Delete blog
const deleteBlog = (req, res) => {
  // res.status(200).json({ message: `Delete blog ${req.params.id}` });
  const { id } = req.params;
  const sqlDelete = "DELETE FROM blogs WHERE id = ?";
  db.query(sqlDelete, id, (err, result) => {
    if (err) {
      console.log("err", err);
    }
  });
  res.status(200).json({ message: `Blog deleted with id:  ${req.params.id}` });
};

module.exports = {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
};

// CREATE TABLE `devserverdb`.`blogs` (
//   `id` INT NOT NULL AUTO_INCREMENT,
//   `title` VARCHAR(255) NOT NULL,
//   `snippet` VARCHAR(255) NOT NULL,
//   `body` TEXT NOT NULL,
//   PRIMARY KEY (`id`),
//   UNIQUE INDEX `id_UNIQUE` (`id` ASC) VISIBLE);
