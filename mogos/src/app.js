const mongoose = require("mongoose");

// mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopoLogy: true, useFindAndModify: true })
//   .then(() => console.log("complledt..."))
//   .catch((err) => console.log(err));


const URI = process.env.MONGODB_URL;

// mongoose.connect(URI, {

// useNewUrlParser: true, 

// useUnifiedTopology: true 

// }, err => {
// if(err) throw err;
// console.log('Connected to MongoDB!!!')
// });

// const mongoose = require('mongoose')

const url = process.env.MONGODB_URL;
const dbName = 'miraj';

mongoose.connect("mongodb://localhost:27017/miraj", { useNewUrlParser: true })
