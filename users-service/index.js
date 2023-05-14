const express = require("express");
const mongoose = require("mongoose");
const typeDefs = require("./schema/userSchema");
const { ApolloServer } = require("apollo-server-express");
const { graphqlHTTP } = require("express-graphql");
const resolvers = require("./resolvers/userResolvers");
const app = express();
// Connect to MongoDB
mongoose
  .connect('mongodb+srv://agsdev123:9502404512@users.rw2n9oj.mongodb.net/",', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("Connected to MongoDB"))
  .catch((error) => console.error("Failed to connect to MongoDB", error));

app.use(
  "/graphql",
  graphqlHTTP({
    schema: typeDefs,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL for testing the API
  })
);

// Start the server
app.listen(3003, () => {
  console.log("Server started on port 3003");
});