const express = require('express');
const app = express();

app.use(express.static('./public'))

app.all('*',(req,res)=>{
    res.status(404).send(`<h1>Page not found</h1>`)
})


app.listen(5000, () => {
    console.log(`sever is listening at 5000`);
  });
  