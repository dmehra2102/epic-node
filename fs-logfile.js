const fs = require('fs');
const path = require('path');
const RandomSentenceGenerator = require('./utils');

// Create a writable stream to log system events
const sentenceGenerator = new RandomSentenceGenerator();
const logFilePath = path.join(__dirname, 'system.log');
const logStream = fs.createWriteStream(logFilePath, { flags: 'a' }); // 'a' for append, 'w': Write mode (default), which truncates the file if it exists.
// The fs.createWriteStream(logFilePath, { flags: 'a' }) method in Node.js is used to 
// create a writable stream that allows you to write data to a specified file


// Function to log messages
function logEvent(message) {
    const timestamp = new Date().toISOString();
    logStream.write(`[${timestamp}] ${message}\n`);
}

// Simulating system events
setInterval(() => {
    logEvent(sentenceGenerator.generateSentence());
}, 5000);

// Gracefully close the stream on exit
process.on('exit', () => {
    logStream.end();
});