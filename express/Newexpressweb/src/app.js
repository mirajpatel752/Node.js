const express = require("express");
const app = express();
const path = require('path')
const port = process.env.PORT || 3000;


console.log(path.join(__dirname,"../public"))

const static_path = path.join(__dirname,"../public")

app.use(express.static(static_path))

app.get("", (req, res) => {
  res.send("welcome  to  MIRAJ");
});

app.listen(port, () => {
  console.log(`listening to  the post at ${port}`);
});
