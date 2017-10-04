const fs = require('fs');
let path1 = "./",
	path2 = ".././"


function countFilesSync(path) {
	let filenames = fs.readdirSync(path);
	return filenames.length;
}

console.log(countFilesSync(path1) + " files in " + path1);
console.log(countFilesSync(path2) + " files in " + path2);