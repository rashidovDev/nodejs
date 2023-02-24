const {name, users} = require('./data')

const fs = require('fs')

fs.readFile("./doc/text1.txt", (err, data) => {
    if(err){
        console.log(err)
    }
    console.log(String(data))
})


fs.writeFile("./doc/text1.txt", "Hi Jane!", (err) => {
    if(err){
        console.log(err)
    }
    console.log(data)
})