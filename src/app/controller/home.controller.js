const shirts = require('../model/product/a.models');

module.exports = function(req, res, next) {
    shirts.find({})
        .then((listShirt) => {

            // bestSelling
            var bestSelling = listShirt.map((item) => item.toObject());
            bestSelling = bestSelling.sort((a, b) => { return -a.quantitySold + b.quantitySold });
            var lengthListShirt = bestSelling.length;
            if (lengthListShirt === 0) { listShirt = [] } else if (lengthListShirt > 12) {
                bestSelling = bestSelling.slice(lengthListShirt - 9, lengthListShirt - 1);
            }

            res.render('home', { bestSelling });
        })
        .catch((err) => { throw err })
}