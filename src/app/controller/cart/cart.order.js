const orderModel = require('../../model/order.model');

module.exports = {
    order: async function(req, res, next) {
        let data = req.body;
        console.log(data);
        var item = new orderModel({
            nameUser: data[1],
            item: data[0],
            phoneNumber: data[2],
            addressOrder: data[3],
        })

        await item.save();

        res.send('this is ok');

    }
}