const { gql } = require("apollo-server-express");

module.exports = gql`
  type Product {
    id: ID!
    name: String!
    price: Float!
  }

  input ProductInput {
    name: String!
    price: Float!
  }

  type Query {
    products: [Product!]!
    product(id: ID!): Product
  }

  type Mutation {
    createProduct(input: ProductInput!): Product!
  }
`;
