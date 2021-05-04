const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const orderSchema = Schema({
    nameUser: { type: String },
    item: { type: Object },
    phoneNumber: { type: String },
    addressOrder: { type: String }
})


const order = mongoose.model('order', orderSchema);

module.exports = order;