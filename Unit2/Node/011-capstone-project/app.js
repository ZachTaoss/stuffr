require(`dotenv`)
require(`express-async-errors`)


const express = require(`express`)
const app = express();

const connectDB = require(`./db/connect`);

const cloundinary = require("cloudinary")
cloundinary.config({
  cloud_name: process.env.cloud_name,
  api_key: process.env.api_key,
  api_secret: process.env.api_secret
})

//Routers

const notFoundError = require("./middleware/notfound");
const errorHandlerMiddleware = require("./middleware/err-handler");
const fileUpload = require("express-fileupload");

const productRouter = require(`./routes/productRouter`)

const port = process.env.PORT || 5000;

app.use(express.json());
app.use(fileUpload({useTempFiles:true}))

app.use(express.static("./public"));
app.get(`/`, (req, res) => {
  res.send(`<h1>Starting Page</h1>`);
});
app.use(`/products`,productRouter)

app.use(notFoundError);
app.use(errorHandlerMiddleware);

const start = async () => {
  try {
    connectDB(process.env.MONGO_URL);
    app.listen(port, console.log(`listening @ ${port}`));
  } catch (err) {
    console.log(err);
  }
};

start();
