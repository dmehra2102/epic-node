const { createServer } = require("node:http");
const fs = require("node:fs");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((request, response) => {
  response.statusCode = 200;
  response.setHeader("Content-Type", "text/plain");

  fs.readFile("server.js", (error, data) => {
    if (error) {
      return;
    }

    response.end(data.toString());
  });
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});

// ---------------------------------------------
/*
  -  The createServer() method of http creates a new HTTP server and returns it.
  -  The server is set to listen on the specified port and host name. When the server is ready, the callback function is called, in this case informing us that the server is running.
*/
