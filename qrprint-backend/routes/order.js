const express = require('express');
const router = express.Router();
const {order_post} = require('../apiController/orderController');

router.route('/').post(order_post);

module.exports = router;
