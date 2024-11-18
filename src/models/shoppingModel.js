const mongoose = require('mongoose');

const shoppingSchema = new mongoose.Schema({
    user: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'users', 
            required: true
        }
    ],
    product: [
        {
            type: mongoose.Schema.Types.ObjectId,
            ref: 'products', 
            required: true
        }
    ],
    total: [
        {
            subtotal: { type: Number, required: true },
            iva: { type: Number, required: true },
            total: { type: Number, required: true}
        }
    ],
    estatus: { type: String, required: true, default: 'Activo'},
    createAt: { type: Date, required: true, default: Date.now},
    closed: { type: Date}
});

module.exports = mongoose.model('Shopping', shoppingSchema);