const express = require('express');
const router = express.Router();


// router get routes
router.get('/', (req, res, next) => {
    res.render('cart');
});

router.post('/', require('../app/controller/cart/cart.check'));


// router post routes

module.exports = router;