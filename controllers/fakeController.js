const db = require("../config/db");

// Get all blogs
const getBlogs = (req, res) => {
  res.status(200).json({ message: `All blogs are here ` });
};

// Get single blog
const getBlog = (req, res) => {
  res.status(200).json({ message: `Got one blog with id: ${req.params.id}` });
};

//  Set blog
const setBlog = (req, res) => {
  res.status(200).json({ message: `Set new blog with id: ${req.params.id}` });
};

// Update blog
const updateBlog = (req, res) => {
  res.status(200).json({ message: `Update blog ${req.params.id}` });
};

// Delete blog
const deleteBlog = (req, res) => {
  res.status(200).json({ message: `Delete blog ${req.params.id}` });
};

module.exports = {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
};
