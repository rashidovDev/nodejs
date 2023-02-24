const fsPromise = require('fs').promises
const path = require('path')

const fileOps = async () => {
  try {
    const data = await fsPromise.readFile(path.join(__dirname, "files", "just.txt"), "utf8");
    console.log(data)
    await fsPromise.writeFile(path.join(__dirname, "files", "promiseWrite.txt"), data);
    await fsPromise.appendFile(path.join(__dirname, "files", "promiseWrite.txt"), "It is adding text")
    await fsPromise.rename(path.join(__dirname, "files", "promiseWrite.txt"),path.join(__dirname, "files", "newPromiseWrite.txt"))
    const newData = await fsPromise.readFile(path.join(__dirname, "files", "newPromiseWrite.txt"), "utf-8")
    console.log(newData)
  }catch(err){
    console.error(err)
  }
}
fileOps()

// fs.mkdir(path.join(__dirname, "/files"), (err) => {
//     if (err) throw err
//     console.log("Folder is created")
// })

// fs.writeFile(path.join(__dirname, "files", "just.txt"), "Hello Anvar", (err) => {
//   if(err) throw err
//   console.log("File is created")

//   fs.appendFile(path.join(__dirname, "files", "just.txt"), "Nice to meet you", (err) => {
//     if(err) throw err
//     console.log("File modified")

//   fs.rename(path.join(__dirname, "files", "test.txt"), path.join(__dirname, "files", "newTest.txt"), (err) => {
//     console.log(err)
//     console.log("FIle is modified")
//   })

//   })
// })





// exit on uncaught errors
process.on('uncaughtException', err => {
  console.error(`There was an uncaught error: ${err}`);
  process.exit(1)
})

