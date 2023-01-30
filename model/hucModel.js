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

// name = "dummy name",
// email = "dummy email",
// collegeName = "dummy college",
// yearOfStudy = "",

// userSchema.pre("save", async function (next) {
//   const salt = await bcrypt.genSalt();
//   this.password = await bcrypt.hash(this.password, salt);
//   next();
// });

// static method
// userSchema.statics.login = async function (email, password) {
//   const user = await this.findOne({ email });
//   if (user) {
//     const auth = await bcrypt.compare(password, user.password);
//     if (auth) {
//       return user;
//     }
//     throw Error("incorrect password");
//   }
//   throw Error("incorrect email");
// };

const hucFormModel = mongoose.model("huc_form", hucForm);

module.exports = hucFormModel;
