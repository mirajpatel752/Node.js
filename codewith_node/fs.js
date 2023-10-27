const { error, log } = require("console");
const fs = require("fs");

// fs.readFile("file.txt", "utf8", (data, error) => {
//   console.log(data, error);
// });

// const a = fs.readFileSync("file.txt");
// console.log(a.toString(), "a");

// fs.writeFile("file2.txt", "this is file 2", (err, data) => {
//   console.log("written  to  file ");
// });

const b = fs.writeFileS("file2.txt", "this is file 2");
console.log(b);
console.log("final reading file");
