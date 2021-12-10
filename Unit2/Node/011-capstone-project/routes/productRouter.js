const express = require(`express`)
const router = express.Router()

const {createProduct,getAllProducts} = require(`../Controllers/productsCon`);
const { uploadProductImage } = require("../Controllers/uploadCon");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImage)

module.exports = router