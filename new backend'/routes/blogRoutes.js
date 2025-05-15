// const express = require("express");
// const router = express.Router();
// const {
//   createBlog,
//   getAllBlogs,
//   getBlogById,
//   updateBlog,
//   deleteBlog
// } = require("../controllers/blogController");

// const auth = require("../middleware/authMiddleware");


// module.exports = router;


const express = require("express");
const router = express.Router();
const blogController = require("../controllers/blogController");
const auth = require("../middleware/authMiddleware");

// Create blog (protected)
router.post("/", auth, blogController.createBlog);

// Other routes...


// @route   GET /api/blogs
router.get("/", blogController.getAllBlogs);

// @route   POST /api/blogs
// router.post("/", auth, createBlog);

// @route   GET /api/blogs/:id
router.get("/:id",blogController.getBlogById);

// @route   PUT /api/blogs/:id
router.put("/:id", auth, blogController.updateBlog);

// @route   DELETE /api/blogs/:id
router.delete("/:id", auth, blogController.deleteBlog);
module.exports = router;
