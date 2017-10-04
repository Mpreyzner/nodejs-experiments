let fs = require('fs'),
	processId;

let filenames = fs.readdirSync(".")
for (let i = 0; i < filenames.length; i++) {
	console.log(filenames[i]);
}

console.log("Ready.")

processId = process.getuid();