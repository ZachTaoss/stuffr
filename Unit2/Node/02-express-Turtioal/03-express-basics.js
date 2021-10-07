const express = require(`express`);
const app = express();

app.get(`/`, (req, res) => {
  console.log("serving home page");
  res.status(200).send("Home Page");
});

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Page not found</h1>`)
})

app.listen(5000, () => {
  console.log(`sever is listening at 5000`);
});
