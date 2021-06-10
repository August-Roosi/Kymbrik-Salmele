const mongoose = require('mongoose');

const productSchema = mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true,
        min: 0,
    },
    category: {
        type: String,
        enum: ["a4", "a3", "a2"]
    }
})

const Product = mongoose.model("Product", productSchema);

module.exports = Product;