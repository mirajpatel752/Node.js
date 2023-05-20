const express = require("express");
const app = express();
let PORT = 5000;
const path = require("path");

const static_path = path.join(__dirname, "../public")
app.set('view engine', 'hbs');
app.use(express.static(static_path))



app.get("/", (req, res) => {
    res.render("index ");
});
app.get("/about", (req, res) => {
    res.send("I am a about");
});
app.get("/weather", (req, res) => {
    res.send("I am a weather");
});
app.get("*", (req, res) => {
    res.send("404");
});
app.listen(PORT, () => {
    console.log(`start servar ${PORT}`)
})


