const mongoose = require('mongoose');
const shirts = require('../../model/product/shirt.modles');
module.exports = async function(req, res, next) {
    var data = req.body;
    // lay id req tao thanh mot mang
    var ids = Object.keys(data);
    shirts.find({
            '_id': {
                $in: ids
            }
        })
        .then((listItem) => {
            listItem = listItem.map((item) => item.toObject());
            res.render('cart', { listItem });
        })
        .catch(err => {
            throw Error(err);
        })
}