//imports

const { application } = require("express")

//load up the dotenv file
require(`dotenv`).config()
require(`express-async-errors`)


//create your app 
const express = require(`express`)
const {sendEmail,idButtonFun} = require("./controller/sendEmail")
const app = express()

app.use(express.json())
//create a path for home that returns a h1 with email Project and a an a with a href to /send

.get (`/`,(req,res) => {
    res.send(`<h1>Email Project </h1> <a href="/send"> Send mail </a> <button onClick=${idButtonFun()}>Reset Password here</button>`)
})
//create a /send route with a git method to run send email from (controolers ) 
.get('/send',sendEmail)
// .get(`/reset`,idButtonFun)
//create your not found and error handler middle wares d

//create your port variarble 
const port = process.env.PORT||5000
//create your app start function
const start=() => {
    try{
        app.listen(port,console.log(`listening @ ${port}`))
    }catch(error){
        console.log(error)
    }
} 

//run the app start function
start()