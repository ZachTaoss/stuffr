const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log(`connect to DB ...`))
    .catch((err) => console.log(err));
};

connectDB(process.env.MONGO_URL);

module.exports = connectDB;
