var express = require('express')

var app = express()
const port = 3000

app.get("/",(req,res)=>{
    res.send("hello from the express")
})


app.get("/about",(req,res)=>{
    res.status(200).send("hello from the about")
})

app.listen(port,()=>{
    console.log(`port listen ${port}`)
})