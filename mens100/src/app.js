const express = require("express");
require("../src/db/conn");

const router = require("./routers/man");

const app = express();
const port = process.env.PORT || 3000;

app.use(express.json());

app.use(router)

app.listen(port, () => {
  console.log(`connectors is live at port no ${port}`);
});
