const customerService = require('../services/userServices');

const resolvers = {
    Query: {
      customers: async () => await customerService.getAllCustomers(),
    },
    Mutation: {
      createCustomer: async (_, args) => await customerService.createCustomer(args),
      updateCustomer: async (_, args) => await customerService.updateCustomer(args),
      deleteCustomer: async (_, { _id }) => await customerService.deleteCustomer(_id),
    },
  };

module.exports = resolvers;

