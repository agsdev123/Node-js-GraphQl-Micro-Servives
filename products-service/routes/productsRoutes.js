// routes/productRoutes.js
const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../schema/productSchema");
const resolvers = require("../resolvers/productResolver");

const router = express.Router();

const server = new ApolloServer({ typeDefs, resolvers });
server.applyMiddleware({ app: router });

module.exports = router;
