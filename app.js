const express = require("express");
const mongoose = require("mongoose");
require('dotenv').config();
const routes = require('./Routes/blogRoute')

const app = express();

app.use(express.json());
app.use("/", routes)


const URI = process.env.URI

mongoose
  .connect(URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(app.listen(3000))
  .then(console.log("mongo connected"))
  .catch((error)=>{
    console.log(error)
  });
