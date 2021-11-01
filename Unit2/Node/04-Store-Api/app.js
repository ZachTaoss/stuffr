const router = require("./routes/product")
const express = require("express");
const app = express();
require(`express-async-errors`)
require("dotenv").config();
const connectDB = require("./db/connect");
const notFound = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/error-handler");

app.use([express.urlencoded({ extended: false }),
    express.json()
])
.get(`/`,(req,res)=>res.send("<h1>Store API</h1>"))
.use(`/api/v1/practice`,router)
.use(errorHandlerMiddleware)
.use(notFound)

// You can define your port value on pc using 
// CLI => set PORT=#### && node app.js
//Now the port is set on the computer .env
// on MAC using 
// starter % port = ###
//run node

const port = process.env.PORT || 5000

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

startApp()

require("./db/connect");
