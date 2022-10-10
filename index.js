const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/postRoutes");
const app = express();
const port = 7000;
require("dotenv").config({ path: "./.env" });

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);

app.get("/", (req, res) => {
  res.send({ message: "its working updated cors" });
});

app.listen(port, () => {
  console.log(`server is running on port= ${port}`);
});
