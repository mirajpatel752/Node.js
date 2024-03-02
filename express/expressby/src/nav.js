var express = require('express')
var app = express();
const port = 3000


console.log(__dirname)

app.use(express.static(staticpath))

app.get("/", (req, res) => {
    res.send("welcome to home page")
    console.log(res)
})

app.get("/about", (req, res) => {
    res.status(200).send("welcome to about page")
    console.log(res)
})
app.get("/team", (req, res) => {
    res.send([
        {
            id: 1,
            title: "miraj"
        },
        {
            id: 1,
            title: "miraj"
        },
        {
            id: 1,
            title: "miraj"
        },
    ])
    console.log(res)
})
app.get("/product", (req, res) => {
    res.json([
        {
            id: 1,
            title: "miraj"
        },
        {
            id: 1,
            title: "miraj"
        },
        {
            id: 1,
            title: "miraj"
        },
    ])
    console.log(res)
})

app.listen(port, () => {
    console.log(`listenig to  the port ${port}`)
})