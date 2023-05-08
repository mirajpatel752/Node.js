// const https = require("http");
// const fs = require("fs");


// const server = https.createServer((req, res) => {

//     const data = fs.readFileSync(`${__dirname}/Userapi/userapi.json`, "utf-8",)
//     const objdata = JSON.parse(data)
//     if (req.url === "/") {
//         res.end("hello  HOME the other")
//     } else if (req.url === "/about") {
//         res.end("hello  ABOUT the other")
//     } else if (req.url === "contact") {
//         res.end("hello contact ")
//     } else if (req.url === "/userapi") {
//         res.end("hello contact ")
//         res.writeHead(200, { "content-type": "application/json" })
//         res.end(objdata[2].name)
//     } else {
//         res.writeHead(404, { "content-type ": "text/html" });
//         res.end("<h1>404 error page page doesn t exitst </h1> ")
//     }
// })

// server.listen(8000, "127.0.0.1", () => {
//     console.log("lisnig post  number 8000")
// })


// const express = require('express');
// const app = express();

// Define a route for the homepage
// app.get('/', function(req, res) {
//   res.send('Welcome to my homepage!');
// });

// // Define a route for a "about" page
// app.get('/about', function(req, res) {
//   res.send('Learn about me and my hobbies.');
// });

// // Define a route for a "contact" page
// app.get('/contact', function(req, res) {
//   res.send('Contact me to learn more.');
// });

// // Start the server
// app.listen(3000, function() {
//   console.log('Server started on port 3000');
// });



