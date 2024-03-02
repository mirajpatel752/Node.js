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
var requests = require("requests");
const Port = 8000;

const staticPath = path.join(__dirname, "../public");
const templed = path.join(__dirname, "../templed");

// app.use(express.static(staticPath))

app.set("views engine", "hbs");

app.set("views", templed);

// app.get("/", (req, res) => {
//   res.render("index");
// });

app.get("/", (req, res) => {
  res.send("hello  friend");
});

app.get("/about", (req, res) => {
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${"surat"}&appid=${"a25f91de011ddf324975b16ebe57c8a2"}`
  ).on("data", (chunk) => {
    const objData = JSON.parse(chunk);
    const arrdata = [objData];
    console.log(`city ${arrdata[0].name} and  ${arrdata[0].main.tems}`);
    // const realTimeData =arrdata
    // .map((val)=> replaceVal(homeFile,val)
    // .join("")
    // )
    // res.write(realTimeData);
  });
  on("end", (err) => {
    if (err) return console.log(err);
    res.end();
  });
  res.send("hello about  friend");
});


app.get("/home", (req, res) => {
  requests(
    `https://api.openweathermap.org/data/2.5/weather?q=${"surat"}&appid=${"a25f91de011ddf324975b16ebe57c8a2"}`
  )
  .on('data', function (chunk) {
    const objData = JSON.parse(chunk);
    const arrdata = [objData];
    console.log(`city ${arrdata[0].name} and  ${arrdata[0].main.temp}`);
  })
  .on('end', function (err) {
    if (err) return console.log('connection closed due to errors', err);
    console.log('end');
  });
  res.send("hello about  friend");
});



app.get("*", (req, res) => {
  res.send("404");
});

app.listen(Port, () => {
  console.log("listening to the post");
});
