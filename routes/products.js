const express = require("express");
const router = express.Router();

// multer setup
const multer = require("multer");
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    // function that specifies the destination folder where the file will be uploaded
    cb(null, "./images/");
  },
  filename: (req, file, cb) => {
    // function that specifies how the file should be named
    cb(null, file.originalname);
  },
});
const upload = multer({ storage }); // here we specify storage options

// destructuring handler functions from controllers folder
const Products = require("../controllers/products");
const { getAllProducts, addProduct } = Products;

router
  .route("/")
  .get(getAllProducts)
  .post(upload.single("productImage"), addProduct); // multer works like a middleware, here i specified the fieldname (productImage) and say that only 1 image will be uploaded for 1 request (upload.single)

module.exports = router;
