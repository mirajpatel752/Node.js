const fs  = require('fs')
// fs.writeFile('read.tsx','bhanderi miraj',(error)=>{
// console.log(error,"err")
// })


// fs.appendFile('read.tsx','mayur bhanderi',(err)=>{
//     console.log(err,'sese ')
// })

fs.readFile('read.tsx','UTF-8',(err,data)=>{
    console.log(err,data)
})