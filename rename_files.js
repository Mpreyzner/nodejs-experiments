const fs = require('fs')


function sync() {
    let oldFilename = "./processId.txt"
    let newFilename = "./processIdOld.txt"

    fs.writeFileSync(oldFilename, 'test')

    fs.chmodSync(oldFilename, 777);
    fs.renameSync(oldFilename, newFilename);

    let isSymLink = fs.lstatSync(newFilename).isSymbolicLink();
    console.log(isSymLink);
}

function asynchro() {
    // body...
}

sync()


let oldFilename = "./processId.txt"
let newFilename = "./processIdOld.txt"

fs.chmod(oldFilename, 777,  err => {
    fs.rename(oldFilename, newFilename,  err => {
        fs.lstat(newFilename,  (err, stats) => {
            let isSymLink = stats.isSymbolicLink();
            console.log(isSymLink);
        });
    })
})