const orderModel = require('../../model/order.model');

module.exports = {
    order: function(req, res, next) {
        let data = req.body;

        var item = new orderModel({
            nameUser: data[1],
            item: data[0],
            phoneNumber: data[2],
            addressOrder: data[3],
        })

        item.save();
        res.redirect(307, 'http://localhost:4000');
    }
}