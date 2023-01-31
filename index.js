const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const router = require("./routes/postRoutes");
const ssologinRouter = require("./routes/ssologinRoutes");
const app = express();
const port = 7000;
require("dotenv").config({ path: "./.env" });

const dbURI = process.env.MONGODB_URI;

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(ssologinRouter);

mongoose
  .connect(dbURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    // app.listen(PORT, () => {
    console.log(`mongodb conected and server started on port ${port}`);
    // })
  })
  .catch((err) => console.log({ err }));

app.get("/", (req, res) => {
  res.send({ message: "its working updated cors" });
});

app.listen(port, () => {
  console.log(`server is running on port= ${port}`);
});
