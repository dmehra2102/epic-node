const fs = require("node:fs");

// This is non-blocking operation
fs.stat("server.js", (err, stats) => {
  if (err) {
    console.error(err);
    return;
  }
  const fileSize = stats.size;
  const isFile = stats.isFile(); // true
  stats.isDirectory(); // false
  stats.isSymbolicLink(); // false

  console.log("isFile :", isFile, ", fileSize :", fileSize);
});

console.log("Line 17: Hello World, I'm first.");

// Node.js also provides a sync method, which blocks the thread until the file stats are ready:
const stats = fs.statSync("server.js");
const fileSize = stats.size;
const isFile = stats.isFile(); // true
stats.isDirectory(); // false
stats.isSymbolicLink(); // false
console.log("isFile :", isFile, ", fileSize :", fileSize);

console.log("Line 33: Hello World, I'm first.");

/*
   - fs.statSync() does not accept a callback; it returns the file stats directly.
*/

// You can also use promise-based fsPromises.stat() method
const fsPromise = require("node:fs/promises");

async function example() {
  try {
    const stats = await fsPromise.stat("/Users/joe/test.txt");
    stats.isFile(); // true
    stats.isDirectory(); // false
    stats.isSymbolicLink(); // false
    stats.size; // 1024000 //= 1MB
  } catch (err) {
    console.log(err);
  }
}
example();
