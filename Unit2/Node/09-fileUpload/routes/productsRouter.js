const express = require('express')
const router = express.Router()

const { createProduct , getAllProducts } = require("../controller/productCon")

const {uploadProductImage} = require("../controller/uploadCon")

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImage)

module.exports = router