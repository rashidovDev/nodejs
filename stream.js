const fs = require("fs")

// fs.writeFile('./doc/text2.txt', "Whatever", (err) => {
//     if(err){
//         console.log(err)
//     }
//     console.log("File created")
// })

const readStream = fs.createReadStream('./doc/text2.txt', { encoding : 'utf8'})

readStream.on('data', (chunk) => {
    console.log('---- New Chunk ----')
    console.log(chunk)
    writeStream.write('\n New Chunk \n')
    writeStream.write(chunk)
})


//piping
readStream.pipe(writeStream)
