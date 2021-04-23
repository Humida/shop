const shirts = require('../model/product/shirt.modles');

module.exports = async function(req, res, next) {
    shirts.find({})
        .then((listShirt) => {
            var bestSelling = listShirt.map((item) => item.toObject());
            var lengthListShirt = bestSelling.length;
            console.log(lengthListShirt);

            if (lengthListShirt === 0) { listShirt = [] } else if (lengthListShirt > 12) {
                bestSelling = bestSelling.slice(lengthListShirt - 9, lengthListShirt - 1);
            }
            res.render('home', { bestSelling });
        })
        .catch((err) => { throw err })
}