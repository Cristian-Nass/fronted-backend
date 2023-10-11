const mongoose = require("mongoose");

const PostSchema = mongoose.Schema({
  userName: String,
  email: String,
});

module.exports = mongoose.model("User", PostSchema);
