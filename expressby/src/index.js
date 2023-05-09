const path = require("path")
var express = require('express')
var app = express();

console.log(__dirname)
const staticpath = path.join(__dirname, "../public")
app.use(express.static(staticpath))
console.log()

app.get("/", (req, res) => {
    res.send("welcome to home page")
    console.log(res)
})

app.listen(3000, () => {
    console.log("3000")
})
