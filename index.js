const  fs = require("fs")

// fs.writeFileSync('read.tst','welcome to miraj')
// fs.writeFileSync('read.tst','welcome to miraj bhanderi')

const buf_data =fs.readFileSync('read.tst')

console.log(buf_data,"bufData")

org_data = buf_data.toString()
console.log(org_data)

fs.renameSync('read.tst','readwrite.tsx')