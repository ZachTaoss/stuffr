const express = require("express");
const auth = require("./middleware/auth");
const app = express();
const logger = require("./middleware/logger");
const morgan = require('morgan')


app
  .use([morgan('tiny'),auth])
  .get("/", (req, res) => {
    res.send("Home Page");
  })
  .get("/about", (req, res) => {
    res.send("About Page");
  })
  .listen(5000, () => console.log("sever is listening at 5000"));
