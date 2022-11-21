const express = require("express");
const cron = require("node-cron");

const router = express.Router();

const {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

// cron.schedule("*/2 * * * * *", () => {
router.route("/").get(getBlogs).post(setBlog);
// router.route("/api/v1/setData").post(setBlog);
router.route("/:id").put(updateBlog).delete(deleteBlog).get(getBlog);
// console.log("router");
// });

module.exports = router;
