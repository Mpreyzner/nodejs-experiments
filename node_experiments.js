//sync

const fs = require('fs');

function sync() {
    let processId;

    let filenames = fs.readdirSync(".")
    for (let i = 0; i < filenames.length; i++) {
        console.log(filenames[i]);
    }

    console.log("Sync Ready.")
    processId = process.getuid();
}

function asynchro() {
    fs.readdir(".", function (err, filenames) {
        let i;
        for (i = 0; i < filenames.length; i++) {
            console.log(filenames[i]);
        }

        console.log("Async Ready.")
    });

    processId = process.getuid();
}

sync()
asynchro()

