const  fs  = require("fs");
// fs.writeFile("read.txt","today is awsome" , ()=>{
//     console.log("file is create")
// })


// fs.appendFile("read.txt","plz come got pausha sapo  ",()=>{
//     console.log("come add")
// })


fs.readFile("read.txt","UTF-8",(err,data)=>{
    console.log(data)
})