const shoppingService = require('../services/shoppingService');

const resolvers = {

    Query: {
        shoppingActive: async () => await shoppingService.getOneShopping(),
        shoppingAll: async () => await shoppingService.getAllShopping()
    },
    Mutation: {
        addProductShopping: async (_, { product }) => await shoppingService.addProduct(product),
        deleteProductShopping: async (_, {_id}) => await shoppingService.deleteProduct(_id),
        createShoppping: async (_, args) => await shoppingService.createShopping(args),
        updateShopping: async (_, args) => await shoppingService.updateShopping(args)
    }

};

module.exports = resolvers;