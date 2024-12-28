const express = require('express')
const app = express()
require('dotenv').config()

app.listen(process.env.PORT , ()=> {
    console.log(`running on ${process.env.PORT}`)
})

app.use((req,res,next) => {
    console.log(`${req.url} And ${req.method} `)
    next()
})

app.get('/data',(req,res)=> {
    res.send({"message": "Hello Middleware"})
})
