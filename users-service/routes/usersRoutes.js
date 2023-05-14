// const express = require("express");
// const usersController = require("../controllers/usersController");

// const router = express.Router();

// router.get("/users", usersController.getUsers);
// router.post("/users", usersController.createUser);
// router.get("/users/:userId", usersController.getUserById);
// module.exports = router;

const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const typeDefs = require("../schema/userSchema");
const resolvers = require("../resolvers/userResolvers");

const app = express();

const server = new ApolloServer({
  typeDefs,
  resolvers,
});

server.applyMiddleware({ app });

module.exports = app;

