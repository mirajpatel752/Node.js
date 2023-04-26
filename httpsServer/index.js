const https = require("http");


const  server = https.createServer((req,res)=>{
res.end("hello  from the other")
})

server.listen(8000,"127.0.0.1",()=>{
    console.log("lisnig post  number 8000")
})