const http = require("http");
const fs = require("fs");
const port = process.env.port || 3000;

const server = http.createServer((req, res) => {
  res.setHeader("Content-type", "text/html");
  if (req.url === "/") {
    res.statusCode = 200;
    res.end(
      "<h1>hello word </h1> <p>hello  lorem  isume this way the  word</p>"
    );
  } else if (req.url === "/about") {
    res.statusCode = 200;
    res.end(
      "<h1>about</h1> <p>hello about lorem  isume this way the  word</p>"
    );
  } else if (req.url === "/hello") {
    res.statusCode = 200;
    const data = fs.readFileSync("index.html");
    res.end(data.toString());
  } else {
    res.statusCode = 404;
  }
});
server.listen(port, () => {
  console.log(`sever is  listening on port${port}`);
});
