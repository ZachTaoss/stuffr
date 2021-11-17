const express = require(`express`)
const authRouter = express.Router()
const {login, dashboard} = require(`../controllers/login`)

authRouter.route("/login").get(login)
authRouter.route("/register").get(userCreate)

module.exports = authRouter;
