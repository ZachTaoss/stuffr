const express = require('express')
const app = express()
const router = express.Router()
const loginPerson = require('../controller/login')
  
  router.route('/').post(loginPerson)
  module.exports = router