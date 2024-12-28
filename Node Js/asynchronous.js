
// using callback
// const fs = require('fs')
// fs.readFile('input.txt','utf-8',(err,data) => {
//     if(err) console.log(err)
//     console.log(data)
// })

//using promises
// const fs = require('fs').promises
// fs.readFile('input.txt','utf-8')
// .then((data)=> console.log(data))
// .catch((err)=> console.log(err))

//using async-await
// const fs = require('fs').promises
// const read = async () => {
//     try {
//         const data = await fs.readFile('input.txt', 'utf-8')
//         console.log(data)
//     }
//     catch(err){
//         console.log(err.message)
//     }
// }
// read()

