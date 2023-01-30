const nodeoutlook = require("nodejs-nodemailer-outlook");
require("dotenv").config({ path: "./.env" });
const hucFormModel = require("../model/hucModel");

// const emailFunction = ({ name, subject, textArea, email }) => {
//   nodeoutlook.sendEmail({
//     auth: {
//       user: "gangecat@outlook.com" || process.env.EMAIL_SENDER,
//       pass: "Mau@1234" || process.env.E_PASS,
//     },
//     from: "gangecat@outlook.com" || process.env.EMAIL_SENDER,
//     to: "marketingwith.hemant@gmail.com" || process.env.RECIEVERS_EMAIL,
//     subject: subject,
//     html: `<div><h2>Name :- ${name} </h2>  <h4>Email :- ${email}</h4> <h3>Description :- ${textArea}</h3></div>`,
//     text: "This is text version!",
//     replyTo: "marketingwith.hemant@gmail.com" || process.env.RECIEVERS_EMAIL,

//     onError: (err) => console.log("error is: ", err),
//     onSuccess: (info) => console.log("success", info),
//   });
// };

// console.log(process.env.EMAIL_SENDER);
const contact = (req, res, next) => {
  const {
    name = "dummy name",
    subject = "dummy subject",
    textArea = "dummy textArea",
    email = "dummy email",
  } = req.body;
  // emailFunction({ name, subject, textArea, email });
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
  // res.send("successful");
};

const hucForm = async (req, res, next) => {
  try {
    const {
      name = "dummy name",
      email = "dummy email",
      collegeName = "dummy college",
      yearOfStudy = "",
    } = req.body;

    const hustler = await hucFormModel.create({
      name,
      email,
      collegeName,
      yearOfStudy,
    });

    console.log(hustler);
    // const token = createJwt(user._id);
    // res.cookie("jwt", token, { httpOnly: true, maxAge: maxAge * 1000 });
    // res.status(201).json({ user: user._id });

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
        res.send({ error: err });
      },
      onSuccess: (info) => {
        console.log("success", info);
        res.send({ success: `sent on email and ${hustler}` });
      },
    });
  } catch (err) {
    console.error({ err });
    // const errors = handleErrors(err);
    // res.status(400).json({ errors });
  }
};

module.exports = { contact, hucForm };
