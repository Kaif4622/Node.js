const fs = require('fs')

const rw = () => {
    //write to the file
    fs.writeFileSync("demo.txt","I am Mohammad Kaif, live in junnar")
    console.log("\nfile writing successfully")
    
    //read from the file
    const data = fs.readFileSync("demo.txt", "utf-8")
    console.log("\nfile read started.....\n",data)
}

module.exports.rw = rw