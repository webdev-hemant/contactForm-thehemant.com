const mongoose = require("mongoose");
const { isEmail } = require("validator");
// const bcrypt = require("bcrypt");

const hucForm = new mongoose.Schema({
  email: {
    type: String,
    required: [true, "email id required"],
    // unique: true,
    lowercase: true,
    validate: [isEmail, "please enter valid email"],
  },
  name: {
    type: String,
    required: [true, "name required"],
  },
  collegeName: {
    type: String,
    required: [true, "collegeName required"],
  },
  yearOfStudy: {
    type: String,
    required: [true, "yearOfStudy required"],
  },
});

const hucFormModel = mongoose.model("huc_form", hucForm);

module.exports = hucFormModel;
