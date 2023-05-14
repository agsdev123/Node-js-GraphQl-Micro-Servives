const { getUsers, getUserById, createUser } = require("../controllers/usersController");

const resolvers = {
  Query: {
    users: () => getUsers(),
    user: (_, { id }) => getUserById(id),
  },
  Mutation: {
    createUser: (_, { input }) => createUser(input),
  },
};

module.exports = resolvers;
