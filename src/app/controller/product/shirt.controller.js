const shirts = require('../../model/product/shirt.modles')
module.exports = {
    shirt: (req, res, next) => {
        shirts.find({})
            .then((item) => { res.json(item) })
            .catch(() => { throw Error('error') })
    },
}