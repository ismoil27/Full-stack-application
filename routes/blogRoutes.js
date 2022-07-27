const express = require("express");

const router = express.Router();

const {
  getBlogs,
  getBlog,
  setBlog,
  updateBlog,
  deleteBlog,
} = require("../controllers/blogController");

router.route("/api/blogs").get(getBlogs);
router.route("/").post(setBlog);
// router.route("/api/v1/setData").post(setBlog);
router.route("/api/blogs/:id").put(updateBlog).delete(deleteBlog).get(getBlog);

module.exports = router;
