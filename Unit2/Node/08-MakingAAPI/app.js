require("dotenv").config();
require("express-async-errors");

const express = require("express");
const app = express()
const connectDB = require("./db/connect")

//routes

const frameRouter = require("./routes/frame")
const authRouter = require("./routes/auth")

//middleware

const errorHandler = require("./middleware/error-handler");
const notFound = require("./middleware/not-found");
const auth = require("./middleware/auth");


//security libraries

const rateLimiter = require("express-rate-limit")
const helmet = require(`helmet`)
const cors = require(`cors`)
const xss = require(`xss-clean`)

const swaggerUI = require("swagger-ui-express")
const YAML = require(`yamljs`)
// const swaggerDocs = YAML.load(`./swagger.yaml`)

app
.set("trust proxy", 1)
.use(
    rateLimiter({
        windowMs: 1000* 60 *15, //15mmin
        max: 100,
    })
)
.use([express.urlencoded({ extended: false }), express.json()])

.use(helmet())

.use(cors())

.use(xss())


.use("/api/v1/frame", auth,frameRouter )
.use("/api/v1/auth", authRouter)
.use(errorHandler)
.use(notFound)

const port = process.env.PORT || 5000 

const start = async () => {
    try{
        connectDB(process.env.MONGO_URL)
        app.listen(port, () => {
            console.log(`listening @ ${port}`)
        })
    } catch(err){
        console.log(err)
    }
}

start()