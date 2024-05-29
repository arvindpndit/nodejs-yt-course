const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url == "/home") res.end("Welcome to the home page");
  else if (req.url == "/shopping") res.end("Let's go shopping");
  else res.end("Welcome to the server");
});

server.listen(3000, () => {
  console.log("Server started at Port 3000");
});

// importing the http module
// creating a server
// defining the req handler
// binding the server to a port
