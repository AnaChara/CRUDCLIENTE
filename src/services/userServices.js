const Customer = require('../models/userModel');
const facturapi = require('../apis/facturapi');

const customerService = {
    getAllCustomers: async () => await Customer.find(),
    
    createCustomer: async (args) => {
        const customer = new Customer(args);
        const facturapiCustomer  = await facturapi.createCustomer(customer);
        customer.facturapiid = facturapiCustomer.id;
        return await customer.save();
    },

    updateCustomer: async ({ _id, ...rest }) => {
        const updatedCustomer = await Customer.findByIdAndUpdate(_id, rest, { new: true });
        const facturapiResponse = await facturapi.updateCustomer(updatedCustomer.facturapiid, rest);
        return updatedCustomer;
      },

    deleteCustomer: async (_id) => {
        const deletedCustomer = await Customer.findByIdAndDelete(_id);
        facturapi.deleteCustomer(deletedCustomer.facturapiid);
        return deletedCustomer;
      }
}

module.exports = customerService;
