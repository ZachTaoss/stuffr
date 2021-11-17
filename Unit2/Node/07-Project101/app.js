
const express = require("express")
const app = express();

require("dotenv").config()

const connectDB = require("./db/connect")

const jobRouter = require("./routes/jobs")
const authRouter = require("./routes/auth");
const erroHandlerMiddleware = require("./middleware/err-handler");
const notFound = require("./middleware/notfound");
/////////////////////////////////////////////////////

const PORT = process.env.PORT || 5000

app.use([express.urlencoded({ extended : false }),
    express.json()
])
.get(`/`,(req,res)=>res.send("<h1>Welcome</h1>"))

.use(helmet())

.use(cors())

.use(xss())

.get(`/`,(re1,res) => {
    res.send(`<h1>Jobs API</h1><a href = "/api-docs">Documentation</a>`)
})

.use(`/api/v1/jobs`,jobRouter)
.use(`/api/v1/auth`,authRouter)

.use(erroHandlerMiddleware)
.use(notFound)


const swaggerUI = require("swagger-ui-express")
const YAML = require(`yamljs`)
const swaggerDocs = YAML.load(`./swagger.yaml`)

///////////////////////////////////////////////
const startApp = async () => {
    try{
        connectDB(process.env.MONGO_URL);
        app.listen(PORT ,()=> {
            console.log(`Sever is listening @ ${PORT}`)
        })
    }catch(err){
        console.log(err);
    }
}


startApp()