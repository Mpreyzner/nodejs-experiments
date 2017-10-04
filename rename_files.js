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

sync()