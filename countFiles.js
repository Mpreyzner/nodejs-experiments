const fs = require('fs');
let path1 = "./",
	path2 = ".././"


function countFilesSync(path) {
	let filenames = fs.readdirSync(path);
	return filenames.length;
}

console.log(countFilesSync(path1) + " files in " + path1);
console.log(countFilesSync(path2) + " files in " + path2);


function countFilesAsync(path, callback) {
	fs.readdir(path, function(err, filenames){
		callback(err, path, filenames.length);
	});
}

logCount = function (err, path, count) {
	console.log(count + " files in " + path);
}

countFilesAsync(path1, logCount);
countFilesAsync(path2, logCount);