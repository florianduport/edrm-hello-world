const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({

  //add fields
  name: {
    type: String,
    default: "New recruit",
  },

});

const User = mongoose.model("UserHelloWorld", userSchema, 'users');

module.exports = User;
