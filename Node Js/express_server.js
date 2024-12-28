const express = require('express')
const app = express()

app.get('/',(req,res)=> {
    res.send({"message" : "Hello Everyone"})
})

app.listen(3000,()=> {
    console.log("The code is running on port: 3000")
})