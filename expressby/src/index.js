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

app.get("/about", (req, res) => {
    requests(
        `https://api.openweathermap.org/data/2.5/weather?q=${req.query.name}&appid=eadd976e1446a53fd7bae769fd21b0f6`
    )
        .on("data", (chunk) => {
            const objdata = JSON.parse(chunk);
            const arrData = [objdata];
            console.log(arrData[0].main.temp);
            // const realTimeData = arrData
            //   .map((val) => replaceVal(homeFile, val))
            //   .join("");
            // res.write(realTimeData);
            // console.log(realTimeData);
        })
        .on("end", (err) => {
            if (err) return console.log("connection closed due to errors", err);
            res.end();
        });
})


app.listen(3000, () => {
    console.log("3000")
})
