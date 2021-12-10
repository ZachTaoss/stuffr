require("dotenv")
require("express-async-errors")

const express = require(`express`)
const app = express()

const stripeCon = require(`./controllers/stripeCon`)

const notFoundError = require("./middleware/notfound")
const errorHandlerMiddleware = require("./middleware/err-handler")

const port = process.env.PORT 

app.use(express.json())

app.use(express.static("./public"))
app.get('/', (req,res) => {
    res.send('<h1>Stripe Payments Starter</h1>')
})
app.post('/stripe', stripeCon)

app.use(notFoundError)
app.use(errorHandlerMiddleware)

const start = async() => {
    try {
        app.listen(port, console.log('listening @' + port))
    }catch(error) {
        console.log(error)
    }
}

start()