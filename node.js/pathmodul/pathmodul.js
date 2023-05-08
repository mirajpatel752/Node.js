const path= require("path");

console.log(path.dirname("C:/Users/BHANDERI MIRAJ/Desktop/Project/Node.js/pathmodul/pathmodul.js"))
console.log(path.extname("C:/Users/BHANDERI MIRAJ/Desktop/Project/Node.js/pathmodul/pathmodul.js"))

console.log(path.parse("C:/Users/BHANDERI MIRAJ/Desktop/Project/Node.js/pathmodul/pathmodul.js"))


const pathname = path.parse("C:/Users/BHANDERI MIRAJ/Desktop/Project/Node.js/pathmodul/pathmodul.js")
console.log(pathname.name)
console.log(pathname.root)


