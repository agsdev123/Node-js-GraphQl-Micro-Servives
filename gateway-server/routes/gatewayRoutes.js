const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { createProxyMiddleware } = require("http-proxy-middleware");

const app = express();

// Product service
app.use(
  "/products",
  createProxyMiddleware({ target: "http://localhost:3001", changeOrigin: true })
);

// Order service
app.use(
  "/orders",
  createProxyMiddleware({ target: "http://localhost:3002", changeOrigin: true })
);

// User service
app.use(
  "/users",
  createProxyMiddleware({ target: "http://localhost:3003", changeOrigin: true })
);

const server = new ApolloServer({
  gateway: {
    serviceList: [
      { name: "products", url: "http://localhost:3001" },
      { name: "orders", url: "http://localhost:3002" },
      { name: "users", url: "http://localhost:3003" },
    ],
  },
  subscriptions: false,
});

server.applyMiddleware({ app });

app.listen(4000, () => {
  console.log("Gateway server listening on port 4000");
});
