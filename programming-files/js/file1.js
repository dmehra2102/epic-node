const fs = require('fs');
const path = require('path');

// Directory containing files to organize
const sourceDir = path.join(__dirname, 'programming-files');

// Function to organize files by extension
function organizeFiles() {
    fs.readdir(sourceDir, (err, files) => {
        if (err) throw err;

        files.forEach(file => {
            const ext = path.extname(file).slice(1); // Get file extension without dot
            const dirPath = path.join(sourceDir, ext);

            // Create directory if it doesn't exist
            if (!fs.existsSync(dirPath)) {
                fs.mkdirSync(dirPath);
            }

            // Move file to the corresponding directory
            const oldPath = path.join(sourceDir, file);
            const newPath = path.join(dirPath, file);
            fs.rename(oldPath, newPath, (err) => {
                if (err) throw err;
                console.log(`Moved ${file} to ${dirPath}`);
            });
        });
    });
}

// Call the function to organize files
organizeFiles();