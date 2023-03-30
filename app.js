const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("Welcome to our homepage");
  }
  if (req.url === "/about") {
    res.end("Our History");
  }
  res.end(`<h1>The pages is not available</h1>
  <a href="/">Home</a>`);
});

server.listen(5000);
