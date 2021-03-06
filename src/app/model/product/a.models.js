const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const shirtSchema = new Schema({
    name: { type: String, unique: true },
    sellings: { type: Number },
    price: { type: Number },
    amount: { type: Number },
    quantitySold: { type: Number },
    type: { type: String },
    path: { type: String },
    createdAt: { type: Date },
});

const shirt = mongoose.model('shirt', shirtSchema);

module.exports = shirt;