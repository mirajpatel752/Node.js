var express = require('express')
var app = express()


app.get("/", (req, res) => {
    res.end("hello  from  the express")
})
app.get("/about", (req, res) => {
    res.end("hello  from  the about")
})

app.listen(5000, () => {
    console.log("npm run  dev 5000")
})