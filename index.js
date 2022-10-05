const express = require("express");
const app = express();
const port = 7000;

app.get("/", (req, res) => {
  res.send({ message: "its working " });
});

app.listen(port, () => {
  console.log(`server is running on port= ${port}`);
});
