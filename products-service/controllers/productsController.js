const Product = require("./productModel");

exports.getProducts = async () => {
  try {
    const products = await Product.find();
    return products;
  } catch (error) {
    throw new Error("Failed to fetch products.");
  }
};

exports.getProductById = async (id) => {
  try {
    const product = await Product.findById(id);
    return product;
  } catch (error) {
    throw new Error("Failed to fetch product by ID.");
  }
};

exports.createProduct = async (input) => {
  try {
    const product = new Product(input);
    const savedProduct = await product.save();
    return savedProduct;
  } catch (error) {
    throw new Error("Failed to create product.");
  }
};
