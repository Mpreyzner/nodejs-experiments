const request = require('request');

let stream = request('http://www.pluralsight.com/');

stream.on('data', (chunk) => {
	console.log(">>>Data>>>>>" + chunk);
})

stream.on('end', () => {
	console.log(">>>>Done>>>>");
})