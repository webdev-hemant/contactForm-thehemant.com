const getAllContacts = require("../model/getAllContacts");

require("dotenv").config({ path: "./.env" });

const HAND_SHAKE = process.env.HAND_SHAKE;

const ssologin = (req, res, next) => {
  const auth = req?.headers?.authorization?.split(" ")[1] || "";
  if (auth === HAND_SHAKE) {
    getAllContacts.find().then((data) => {
      const filteredData = data?.map(
        ({ email, name, collegeName, yearOfStudy }) => {
          return { email, name, collegeName, yearOfStudy };
        }
      );
      // console.log(filteredData);
      return res.send(filteredData);
    });
  } else {
    res.status(404).send({ message: "invalide token" });
  }
};

module.exports = { ssologin };
