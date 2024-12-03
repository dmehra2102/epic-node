const { createServer } = require("node:http");

const hostname = "127.0.0.1";
const port = 3000;

const server = createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader("Content-Type", "text/plain");
  res.write("Hello world", (err) => {
    console.log("Write completed, do more writes now.");
    if (err) {
      console.log("Error occured :", err);
    }
  });
  res.end("This is the end of the response.");
  // Writing more now is not allowed!
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});
