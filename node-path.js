// You can get the file name without the extension by specifying a second argument to basename:
// Import the 'path' module from Node.js
const path = require("node:path");

// Define a string representing the file path
const notes = "server.js";

// Get the directory name of the path
const var1 = path.dirname(notes); // Example: /users/joe

// Get the base name of the path (with extension)
const var2 = path.basename(notes); // Example: server.js

// Get the file extension of the path
const var3 = path.extname(notes); // Example: .js

// Get the base name of the path without the file extension
const var4 = path.basename(notes, path.extname(notes)); // Example: server

// Log the results to the console
console.log(var1, var2, var3, var4);

console.log(var1, var2, var3);
