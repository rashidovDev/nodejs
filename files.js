const fs = require("fs");


// Read files
fs.readFile('./doc/text1.txt', (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(String(data))
})

// Write files 
fs.writeFile('./doc/text2.txt', "Hello Dildora", () => {
    console.log("Succesfully written")
})

// Create directory(folder)
if(!fs.existsSync('./assets')){
    fs.mkdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log("Folder created")
    })
}else{
    fs.rmdir('./assets', (err) => {
        if(err){
            console.log(err)
        }
        console.log("Folder deleted")
    } )
}

if(fs.existsSync('./doc/text2.txt')){
    fs.unlink('./doc/text2.txt', (err) => {
        if(err){
            console.log(err)
        }
        console.log("File deleted")
    })
}