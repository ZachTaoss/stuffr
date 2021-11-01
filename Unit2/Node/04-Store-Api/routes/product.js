const express = require(`express`)
const router = express.Router()
const {getAllProducts,getAllStatic} = require('../controllers/productsCon')

router.route("/").get(getAllProducts)
router.route("/static").get(getAllStatic)


module.exports=router