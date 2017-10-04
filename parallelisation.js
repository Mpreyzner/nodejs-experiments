const fs = require('fs');

function calculateByteSize() {
	let totalBytes = 0;

	let fileNames = fs.readdirSync(".");
	for (let i = 0; i < fileNames.length; i++) {
		let stats = fs.statSync("./" + fileNames[i]);
		totalBytes += stats.size;	
	}
	console.log(totalBytes);
}

calculateByteSize();