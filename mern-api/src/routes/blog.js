const express = require("express");
const { body } = require("express-validator");

const router = express.Router();

const blogController = require("../controllers/blog");

// POST : Create post
router.post(
  "/post",
  [
    body("title").isLength({ min: 5 }).withMessage("Input Title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("Input Body tidak sesuai"),
  ],
  blogController.createBlogPost
);
// --- display 1 halaman posts ---
router.get("/posts/", blogController.getAllBlogPost);

// --- display spesifik post ---
router.get("/post/:postId", blogController.getBlogPostById);

// --- Update ---
router.put("/post/:postId", [
  ([
    body("title").isLength({ min: 5 }).withMessage("Input Title tidak sesuai"),
    body("body").isLength({ min: 5 }).withMessage("Input Body tidak sesuai"),
  ],
  blogController.updateBlogPost),
]);
//test
// --- Delete Postingan ---
router.delete("/post/:postId", blogController.deleteBlogPost);

module.exports = router;
