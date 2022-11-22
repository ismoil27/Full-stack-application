const express = require("express");

const cron = require("node-cron");

const {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("./controllers/blogController");

const job = cron.schedule("*/2 * * * *", function getBlogs() {
  console.log(new Data().toLocaleString());
});
