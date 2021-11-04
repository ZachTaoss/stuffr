//basic middle ware
// a app that listens on port 3000 || env

//routes to /api/v1/login

const router = require("./routes/login");
const express = require("express");
const app = express();

require(`express-async-errors`);
require("dotenv").config();

const connectDB = require("./db/connect");
const errorHandlerMiddleware = require("./middleware/error-handler");
const notFound = require('./middleware/notfound')

app
  .use([express.urlencoded({ extended: false }), express.json()])
  .get(`/`, (req, res) => res.send("<h1>Store API</h1>"))
  .use(express.static("./public"))
  .use(`/api/v1`, router)
  .use(errorHandlerMiddleware)
  .use(notFound);

const port = process.env.PORT || 5000;

const startApp = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port, () => {
      console.log(`Sever Listening @ ${port}`);
    });
  } catch (err) {
    console.log(err);
  }
};

startApp();
