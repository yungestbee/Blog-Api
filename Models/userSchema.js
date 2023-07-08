const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
  username: {
    type: String,
    require: true
  },
  password: {
    type: String,
    minlength: 8,
    require: true
  },
});

const user = mongoose.model("user", userSchema);

module.exports = user
