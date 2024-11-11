const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    legal_name: { type: String, required: true },
    tax_id:{type:String, required:true},
    tax_system:{type:String, required:true},
    email: { type: String, required: true },
    password: { type: String, required: true },
    address: { 
        zip: { type: String, required: true }
    },
    registrationDate: { type: String},
    userTipe: { type: String},
    preferredPaymentMethod: { type: [String]}
});

module.exports = mongoose.model('Customer', userSchema);
