const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/about") res.end("This is about page");
  if (req.url === "/") res.end("This is Home page");
});

server.listen(5858);
