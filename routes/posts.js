const express = require("express");
const router = express.Router();
const Post = require("../models/Post");

router.get("/", (req, res) => {
  res.send("Post");
});

// router.get("/specific", (req, res) => {
//   res.send("Specific Post");
// });
router.post("/", async (req, res) => {
  console.log(req.body);
  const post = new Post({
    userName: req.body.userName,
    email: req.body.email,
  });
  try {
    const savePost = await post.save();
    res.json(savePost);
  } catch (err) {
    res.json({ message: err });
  }
});

module.exports = router;
