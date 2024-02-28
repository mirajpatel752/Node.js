var express = require('express')

var app = express()


app.get("/",(req,res)=>{
    res.send("hello from the express")
})


app.get("/about",(req,res)=>{
    res.send("hello from the about")
})

app.listen(8000,()=>{
    console.log("port listen")
})


// 28start