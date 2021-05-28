const Product = require("../models/Product");

const getAllProducts = async (req, res, next) => {
  const products = await Product.find({});
  res.status(200).send({ products });
};

const addProduct = async (req, res, next) => {
  // multer gives us acces to req.file object (file that is being uploaded) with bunch of properties
  // console.log(req.file)
  const newProduct = {
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    inStock: req.body.inStock,
    image: req.file.path,
  }; // enter these fields with form-data in postman

  const product = new Product(newProduct);
  const saveProduct = await product.save();
  res.status(201).json({ msg: "Product is saved", new_product: saveProduct });
};

module.exports = {
  getAllProducts,
  addProduct,
};
