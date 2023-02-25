const fs = require("fs")
const path = require("path")

if(!fs.existsSync("./new")){
    fs.mkdir(path.join(__dirname, "/new"), (err) => {
        if(err) throw err
        console.log("Folder is created")
    })
}
if(fs.existsSync("./new")){
    fs.rmdir(path.join(__dirname, "/new"), (err) => {
        if(err) throw err
        console.log("Folder is removed")
    })
}