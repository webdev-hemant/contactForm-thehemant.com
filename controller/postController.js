const nodeoutlook = require("nodejs-nodemailer-outlook");
require("dotenv").config({ path: "./.env" });

const emailFunction = ({ name, subject, textArea, email }) => {
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

    onError: (err) => console.log("error is: ", err),
    onSuccess: (info) => console.log("success", info),
  });
};

console.log(process.env.EMAIL_SENDER);
const contact = (req, res, next) => {
  const {
    name = "dummy name",
    subject = "dummy subject",
    textArea = "dummy textArea",
    email = "dummy email",
  } = req.body;
  emailFunction({ name, subject, textArea, email });
  res.send({ success: true });
  // res.send("successful");
};

module.exports = { contact };
