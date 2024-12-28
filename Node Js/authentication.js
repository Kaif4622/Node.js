const jwt = require('jsonwebtoken')

const token = jwt.sign({username: "kaif"} , "key" , {expiresIn : '1hr'})
console.log("JWT: ",token)


const verified = jwt.verify(token,"key")
console.log("VERIFY: ",verified)