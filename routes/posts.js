const express = require("express");
const router = express.Router();
const postControllers = require("../controllers/postControllers");
const { verifyToken } = require("../middleware/auth");

router.get("/", postControllers.getPosts);
router.post("/", verifyToken, postControllers.createPost);

router.get("/:id", postControllers.getPost);
router.patch("/:id", verifyToken, postControllers.updatePost);
router.delete("/:id", verifyToken, postControllers.deletePost);

router.post("/like/:id", verifyToken, postControllers.likePost);
router.post("/dislike/:id", verifyToken, postControllers.unlikePost);
router.get(
  "/user_liked_posts/:id",
  verifyToken,
  postControllers.getUserLikedPosts
);

router.get("/user_posts/:id", verifyToken, postControllers.getUserPosts);

module.exports = router;
