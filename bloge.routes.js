const { Router } = require("express");
const BlogController = require("../controller/blog.controller")
const blogController = new BlogController()
const router = Router();

router.get("/", blogController.getBlog)
router.post("/",blogController.createNewBlog)
router.delete("/", blogController.deleteBlog)
router.patch("/",blogController.updateBlog)

module.exports = { blogController:router }