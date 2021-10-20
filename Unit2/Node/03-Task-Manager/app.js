const connect = require("./db/connect");
const express = require("express");
const app = express();
require(`dotenv`).config();

const router = require("./routes/tasksRou");

//conenct to the database
// const connectDB = async () => {
//   try {
//     await connect(process.env.MONGO_URL);
//   } catch (err) {
//     console.log(err);
//   }
// };
// connectDB();

app
  // declaring the html/css directory
  .use(express.static("./public"))

  //middleware
  .use([express.urlencoded({ extended: false }), express.json()])

  // routes
  .use("/api/v1/tasks", router)

  // listen
  const startSever = async () => {
    try {
      await connect(process.env.MONGO_URL);
      app.listen(5000,()=> console.log(`listening @ 5000`))
    } catch (err) {
      console.log(err);
    }
  };
  startSever();
//   .listen(5000, () => {
//     console.log(`listening @ 5000`);
//   });
