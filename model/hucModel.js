const mongoose = require("mongoose");
const { isEmail } = require("validator");
require("dotenv").config({ path: "./.env" });

const serverMode = process.env.SERVER_MODE;

let DB_COLLECTION_NAME = "";

if (serverMode === "prod") {
  DB_COLLECTION_NAME = "production_db_form";
}

if (serverMode === "dev") {
  DB_COLLECTION_NAME = "dev_db_form";
}
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
  mobile: {
    type: String,
    required: [true, "mobile required"],
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

const hucFormModel = mongoose.model(DB_COLLECTION_NAME, hucForm);

module.exports = hucFormModel;
