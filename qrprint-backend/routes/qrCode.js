const express = require('express');
const router = express.Router();
const {qrcode_post} = require('../apiController/qrCodeController');

router.route('/generate').post(qrcode_post);

module.exports = router;
