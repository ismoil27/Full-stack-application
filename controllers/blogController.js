const db = require("../config/db");

// Get all blogs
const getBlogs = (req, res) => {
  //  res.status(200).json({ message: "All blogs" });
  console.log("step1");
  const sqlGet = "SELECT * FROM blogs";
  db.query(sqlGet, (err, result) => {
    res.send(result);
  });
  console.log(`${sqlGet}`);
};

// Get single blog
const getBlog = (req, res) => {
  // res.status(200).json({ message: `Update blog ${req.params.id}` });

  const { id } = req.params;
  const sqlGetSingle = "SELECT * FROM blogs WHERE id = ?";
  db.query(sqlGetSingle, id, (err, result) => {
    if (err) {
      console.log(err);
    }
    res.send(result);
  });
  console.log(`${sqlGetSingle}`);
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

  // if (req.params.id !== id) {
  //   console.log(`This user is not exist with id ${req.params.id}`);
  // } else {
  //   res
  //     .status(200)
  //     .json({ message: `Blog deleted with id:  ${req.params.id}` });
  // }
};

module.exports = {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
};
