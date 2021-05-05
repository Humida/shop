const shirts = require('../../model/product/a.models')
module.exports = {
    shirt: (req, res, next) => {
        shirts.find({})
            .then((item) => { res.json(item) })
            .catch((err) => { console.log(err) })
    },
}