const express = require(`express`)
const router = express.Router()

const {createProduct,getAllProducts} = require(`../Controllers/productsCon`);
const { uploadProductImage } = require("../Controllers/uploadCon");

router.route("/").get(getAllProducts).post(createProduct);
router.route("/uploads").post(uploadProductImage)

const express = require("express");
const router = express.Router();
const {
  createProduct,
  filterProducts,
  deleteProduct,
  getProduct,
  getAllProducts,
  updateProduct,
} = require("../controllers/product");

router
  .route("/product")
  .get(getAllProducts)
  .post(createProduct)
  .get(filterProducts);
router
  .route("/product/:id")
  .delete(deleteProduct)
  .put(updateProduct)
  .get(getProduct);

module.exports = router;