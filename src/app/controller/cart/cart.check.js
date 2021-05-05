const shirts = require('../../model/product/a.models');

module.exports = function(req, res, next) {
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
            console.log(err);
        })
}