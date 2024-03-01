// var express = require("express");
// const path = require("path");

// var app = express();

// console.log();
// const staticPAth = path.join(__dirname, "../public");

// app.use(express.static(staticPAth));

// app.get("/", (req, res) => {
//   res.send("hello from the express");
// });

// app.get("/about", (req, res) => {
//   res.send("hello from the about");
// });

// app.listen(8000, () => {
//   console.log("port listen");
// });

const express = require("express");
const path = require("path");
const app = express();
const Port = 8000;

const staticPath = path.join(__dirname, "../public");
const templed = path.join(__dirname,"../templed")

// app.use(express.static(staticPath))

app.set("views engine", "hbs");

app.set('views',templed)

// app.get("/", (req, res) => {
//   res.render("index");
// });



app.get("/", (req, res) => {
  res.send("hello  friend");
});


app.get("/about", (req, res) => {
  res.send("hello about  friend");
});


app.get("*",(req,res)=>{
  res.send("404")
})

app.listen(Port, () => {
  console.log("listening to the post");
});


