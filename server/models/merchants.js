const mongoose = require('mongoose');

const merchantSchema = new mongoose.Schema({
    companyName: {
        type: String,
        required: true,
    },
    accountNumber: {
        type: String,
        required: true,
        unique: true, 
    },
    balance: {
        type: Number,
        required: true,
        default: 0, 
    },
}, {
    timestamps: true, 
});


const Merchant = mongoose.model('Merchant', merchantSchema);

module.exports = Merchant;