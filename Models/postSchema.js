const mongoose = require("mongoose");

const postSchema = mongoose.Schema({
  title: {
    type: String,
    require: true
  },
  content: {
    type: String,
    require: true
  },
  user_id:{
    type: String,
    require: true
  }
});

const post = mongoose.model("post", postSchema);

module.exports = post
