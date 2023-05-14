const {
  getProducts,
  getProductById,
  createProduct,
} = require("./controllers/productController");

const resolvers = {
  Query: {
    products: () => getProducts(),
    product: (_, { id }) => getProductById(id),
  },
  Mutation: {
    createProduct: (_, { input }) => createProduct(input),
  },
};

module.exports = resolvers;
