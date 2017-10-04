const fs = require('fs');

function calculateByteSizeSync() {
	let totalBytes = 0;

	let fileNames = fs.readdirSync(".");
	for (let i = 0; i < fileNames.length; i++) {
		let stats = fs.statSync("./" + fileNames[i]);
		totalBytes += stats.size;	
	}
	console.log(totalBytes);
}

calculateByteSizeSync();

function calculateByteSizeAsync() {
	let totalBytes = 0;
	fs.readdir(".", (err, filenames) => {
		//let finished = ( == 0);
		let filesLeft = filenames.length;
		for (let i = 0; i < filenames.length; i++) {
			fs.stat("./" + filenames[i], (err, stats) => {
				totalBytes += stats.size;
				filesLeft--;
				if (filesLeft == 0) {
					console.log(totalBytes);
					return;
				}
			});
			
		}
	});
}

calculateByteSizeAsync()