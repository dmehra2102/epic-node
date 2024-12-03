const fs = require("node:fs");

fs.readFile("server.js", (err, data) => {
    if (err) {
        console.error(err);
        return;
    }    
    console.log(data.toString());
});