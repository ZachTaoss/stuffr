const mongoose = require(`mongoose`);

// const mongo_url = "";

// mongoose
//     .connect(mongo_url)
//     .then(()=>console.log(`connected to DB...`))
//     .catch((err) => console.log(err))

const connectDB = (url) => {
  return mongoose
    .connect(url)
    .then(() => console.log(`connect to DB ...`))
    .catch((err) => console.log(err));
};

module.exports = connectDB;
