const express = require('express');
const router = express.Router();

const cartOrderControllor = require('../app/controller/cart/cart.order')


// router get routes
router.get('/', (req, res, next) => {
    res.render('cart');
});

router.post('/order', cartOrderControllor.order)

router.post('/', require('../app/controller/cart/cart.check'));


// router post routes

module.exports = router;