const { getOrders, createOrder } = require("../controllers/ordersController");

const resolvers = {
  Query: {
    orders: () => getOrders(),

  },
  Mutation: {
    createOrder: (_, { input }) => createOrder(input),
  },
};

module.exports = resolvers;
