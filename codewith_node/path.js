const path = require("path");
// console.log(path, "path");

const a = path.basename("C:\\temp\\myfile.html");
const b = path.dirname("/foo/bar/baz/asdf/quux");
console.log(a);
console.log(b);

const c = path.extname(__filename);
const d = path.extname(__dirname);
console.log(__filename, c, "-c-", d);
