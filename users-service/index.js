const express = require("express");
const mongoose = require("mongoose");
const schema = require("./schema/userSchema");
const { ApolloServer } = require("apollo-server-express");
const { graphqlHTTP } = require("express-graphql");
const resolvers = require("./resolvers/userResolvers");
const app = express();
// Connect to MongoDB

mongoose.connect(
  "mongodb+srv://agsdev123:9502404512@users.rw2n9oj.mongodb.net/",
  {
    // Connecting to the MongoDB database
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);
const db = mongoose.connection;

db.on("error", console.error.bind(console, "MongoDB connection error:"));
db.once("open", () => {
  console.log("MongoDB connected!");
});

app.use(
  "/graphql",
  graphqlHTTP({
    schema,
    rootValue: resolvers,
    graphiql: true, // Enable GraphiQL for testing the API
  })
);

// Start the server
app.listen(3003, () => {
  console.log("Server started on port 3003");
});