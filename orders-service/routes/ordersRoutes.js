// const express = require("express");
// const ordersController = require("../controllers/ordersController");

// const router = express.Router();

// router.get("/orders", ordersController.getOrders);
// router.post("/orders", ordersController.createOrder);

// module.exports = router;
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../schema/orderSchema");
const resolvers = require("../resolvers/orderResolvers");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

module.exports = app;
