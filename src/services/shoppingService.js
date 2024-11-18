const Shopping = require('../models/shoppingModel');

const shoppingService = {
    getOneShopping: async (id) => await Shopping.find({
        "user._id": id,
        estatus: "ACTIVO"
    }).populate('user').populate('product'),

    getAllShopping: async (id) => await Shopping.find({
        "user._id": id
    }).populate('user').populate('product'),

    createShopping: async (args) => {
        const shCar = await new Shopping(args).populate('user').populate('product');

        return await shCar.save();
        
    },
    addProduct: async (_id, productId) => {
        return await Shopping.updateOne(
            { _id }, 
            { $push: { product: productId } } 
        );
    },
    deleteProduct: async (_id, productId) => {
        return await Shopping.updateOne(
            { _id },
            { $pull: { product: productId}}
        );
    },
    updateShopping: async ({_id, ...rest}) => {
        return await Shopping.findByIdAndUpdate(_id, rest, { new: true });
    }
};

module.exports = shoppingService;