const mongoose = require("mongoose");

// create an schema
const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  collegeName: String,
  yearOfStudy: String,
  mobile: String,
});

// var userModel=mongoose.model('users',userSchema);

// module.exports = mongoose.model("Users", userModel);

const getAllContacts = mongoose.model("huc_forms", userSchema);

module.exports = getAllContacts;
