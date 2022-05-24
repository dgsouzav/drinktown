const mongoose = require('../database/connection');

const ProductSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    id: { 
        type: Number, 
        required: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
});

const Product = mongoose.model('Product', ProductSchema);

module.exports = Product;