const nodeoutlook = require("nodejs-nodemailer-outlook");
require("dotenv").config({ path: "./.env" });
const hucFormModel = require("../model/hucModel");

const contact = (req, res, next) => {
  const {
    name = "dummy name",
    subject = "dummy subject",
    textArea = "dummy textArea",
    email = "dummy email",
  } = req.body;

  nodeoutlook.sendEmail({
    auth: {
      user: "gangecat@outlook.com" || process.env.EMAIL_SENDER,
      pass: "Mau@1234" || process.env.E_PASS,
    },
    from: "gangecat@outlook.com" || process.env.EMAIL_SENDER,
    to: "marketingwith.hemant@gmail.com" || process.env.RECIEVERS_EMAIL,
    subject: subject,
    html: `<div><h2>Name :- ${name} </h2>  <h4>Email :- ${email}</h4> <h3>Description :- ${textArea}</h3></div>`,
    text: "This is text version!",
    replyTo: "marketingwith.hemant@gmail.com" || process.env.RECIEVERS_EMAIL,

    onError: (err) => {
      console.log("error is: ", err);
      res.send({ error: err });
    },
    onSuccess: (info) => {
      console.log("success", info);
      res.send({ success: info });
    },
  });
};

const hucForm = async (req, res, next) => {
  try {
    const FORM_KEY = process.env.FORM_KEY;
    const auth = req?.headers?.authorization?.split(" ")[1] || "";
    if (auth === FORM_KEY) {
      const {
        name = "dummy name",
        mobile = "",
        email = "dummy email",
        collegeName = "dummy college",
        yearOfStudy = "",
      } = req.body;

      nodeoutlook.sendEmail({
        auth: {
          user: "gangecat@outlook.com",
          pass: "Mau@1234",
        },
        from: "gangecat@outlook.com",
        to: "hustleupacademy@gmail.com",
        subject: "hustle up academy lead",
        html: `<div>
              <h1>New hustler found</h1>
              <h2>Name :- ${name} </h2>
              <h4>Email :- ${email}</h4>
              <h3>College Name :- ${collegeName}</h3>
              <h3>Year of study :- ${yearOfStudy}</h3>
            </div>`,
        text: "This is text version!",
        replyTo: "hustleupacademy@gmail.com",

        onError: (err) => {
          console.log("error is: ", err);
        },
        onSuccess: (info) => {
          console.log("success", info);
        },
      });

      hucFormModel
        .create({
          name,
          mobile,
          email,
          collegeName,
          yearOfStudy,
        })
        .then((response) => {
          console.log({ response });
          res.status(201).send({ success: `record saved` });
        })
        .catch((err) => {
          res.status(500).send({ error: err });
        });
    } else {
      res.status(400).send({
        message: "invalid activity!",
      });
    }
  } catch (err) {
    console.error({ err });
  }
};

module.exports = { contact, hucForm };
