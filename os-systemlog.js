const os = require('os');
const fs = require('fs');
const path = require('path');

const statsFileSystem = path.join(__dirname, 'cpu-system.log');

// Function to log system stats
function logSystemStats() {
    const cpuUsage = os.cpus();
    const totalMemory = os.totalmem();
    const freeMemory = os.freemem();

    const cpuLoadAverages = cpuUsage.map(cpu => {
        return {
            model: cpu.model,
            speed: cpu.speed,
            times: cpu.times
        };
    });
    
    // Create a formatted string for CPU load averages
    const cpuLoadAvgString = cpuLoadAverages.map(cpu => {
        return `Model: ${cpu.model}, Speed: ${cpu.speed} MHz`;
    }).join(', ');
    
    // Create the stats message
    const statsMessage = `CPU Load Avg: ${cpuLoadAvgString}, Free Memory: ${(freeMemory / (1024 * 1024)).toFixed(2)} MB, Total Memory: ${(totalMemory / (1024 * 1024)).toFixed(2)} MB\n`;

    fs.appendFile(statsFileSystem, statsMessage, (err) => {
        if (err) {
            console.error('Error logging system stats:', err);
        }
    }); 
}


setInterval(logSystemStats, 4000);