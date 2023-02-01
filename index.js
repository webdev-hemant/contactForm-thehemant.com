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
const serverMode = process.env.SERVER_MODE;

let DB_NAME = "";

if (serverMode === "prod") {
  DB_NAME = "fua_prod";
}

if (serverMode === "dev") {
  DB_NAME = "fua_dev";
}

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());
app.use(router);
app.use(ssologinRouter);

mongoose
  .connect(dbURI, {
    dbName: DB_NAME,
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log(`mongodb conected`);
  })
  .catch((err) => console.log({ err }));

app.get("/", (req, res) => {
  res.send({ message: `${serverMode} server is up` });
});

app.listen(port, () => {
  console.log(`${serverMode} server is running on port= ${port}`);
});
