const express = require('express')
// const { people } = require('../data')
const app = express()
// const router = express.Router()

const auth = require("./router/auth")
const people = require('./router/people')


app
.use(express.static('../public'))
.use([express.urlencoded({extended:false}), express.json()])

.use("/login",auth)
.use('/api/people',people)


.listen(5000,() => console.log("Sever Listening 5000"))