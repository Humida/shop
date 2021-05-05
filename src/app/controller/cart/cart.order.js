const orderModel = require('../../model/order.model');
const mongoose = require('mongoose');
module.exports = {
    order: function(req, res, next) {
        let data = req.body;
        console.log(data);
        var item = new orderModel({
            someId: mongoose.Types.ObjectId(),
            nameUser: data[1],
            item: data[0],
            phoneNumber: data[2],
            addressOrder: data[3],
        })
        item.save();

        console.log('fdihfidhfid');
    }
}