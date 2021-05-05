const express = require('express');
const shirtController = require('../app/controller/product/shirt.controller');
const router = express.Router();

// router get

router.get('/', shirtController.shirt)
    // router put

// router update

// router delete

module.exports = router;