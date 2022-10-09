const express = require("express");
const bodyParser = require("body-parser");
const app = express();
const port = 7000;

// app.use(express.static("public"));
// app.set("view engine", "ejs");
// ---------------------------------
// const dbURI = "";
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.get("/", (req, res) => {
  res.send({ message: "its working " });
});
app.post("/contact", (req, res) => {
  console.log(req.body);
  res.send(req.body);
});

app.listen(port, () => {
  console.log(`server is running on port= ${port}`);
});
