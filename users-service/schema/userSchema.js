

const { buildSchema } = require("graphql");

const schema = buildSchema(`
  type User {
    id: ID!
    name: String!
    email: String!
  
  }



  type Query {
    user(id: ID!): User
    users: [User!]!
   
  }

  type Mutation {
    createUser(name: String!, email: String!): User
  
  }
`);

module.exports = schema;