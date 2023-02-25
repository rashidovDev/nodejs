const fs = require("fs")
const path = require("path")

fs.writeFile(path.join(__dirname, "dir.js"), "console.log('Anvar')", (err) => {
    if(err) throw err
    console.log('FIle created')
})

 


