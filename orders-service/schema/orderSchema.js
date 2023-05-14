const { gql } = require("apollo-server-express");

module.exports = gql`
  type Order {
    id: ID!
    userId: User!
    productId: Product!
    quantity: Int!
  }

  input OrderInput {
    userId: ID!
    productId: ID!
    quantity: Int!
  }

  type Query {
    orders: [Order!]!
   
  }

  type Mutation {
    createOrder(input: OrderInput!): Order!
  }
`;
