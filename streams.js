const request = require('request');

let stream = request('http://www.pluralsight.com/');
let counter = 0;
stream.on('data', (chunk) => {
	console.log(">>>Data>>>>>" + counter);
	counter++;
})
console.log('Am I waiting or not?');

setTimeout(() => {
  console.log('hello again');
}, 1000);

stream.on('end', () => {
	console.log(">>>>Done>>>>");
})

console.log('This is the end. My only friend. The end.');