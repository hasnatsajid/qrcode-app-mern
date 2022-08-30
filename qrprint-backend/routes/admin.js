const express = require('express');
const router = express.Router();
const authController = require('../controller/authContoller');
const profileController = require('../controller/profileController');
const orderController = require('../controller/orderController');
const paymentController = require('../controller/paymentContoller');
const qrCodeController = require('../controller/qrCodeContoller');

const auth = require('../config/auth');

/* GET users listing. */
router.get('/', auth.ensureAuthenticatedAdmin, authController.admin_get);
/* GET - Public - Show admin log in page */
router.get('/login', authController.login_get);
/* POST - Public - admin log */
router.post('/login', authController.login_post);
/* GET - Public - admin log out */
router.get('/logout', auth.ensureAuthenticatedAdmin, authController.logout_get);

// ------------------ PROFILE ROUTES -------------------
router.get('/profile', auth.ensureAuthenticatedAdmin, profileController.profile_get);
router.post('/profile/edit', auth.ensureAuthenticatedAdmin, profileController.profile_put);
router.get('/profile/change-password', auth.ensureAuthenticatedAdmin, profileController.change_password_get);
router.put('/profile/change-password', auth.ensureAuthenticatedAdmin, profileController.change_password_put);


// Order Routes
// GET - Private - Show Order
router.get('/order/:status', auth.ensureAuthenticatedAdmin, orderController.order_get);
// GET - Private - Show Add Order Page
router.get('/order/add/new', auth.ensureAuthenticatedAdmin, orderController.neworder_get);
// POST - Private - Add order
router.post('/order', auth.ensureAuthenticatedAdmin,orderController.order_post);
// GET - Private - Delete order
router.get('/order/:id/delete', auth.ensureAuthenticatedAdmin, orderController.deleteorder_get);
// GET - Private - Show Edit order Page
router.get('/order/:id/edit', auth.ensureAuthenticatedAdmin, orderController.editOrder_get);
// PUT - Private - Edit order
router.post('/order/edit', auth.ensureAuthenticatedAdmin,orderController.order_put);

// Payment Routes
// GET - Private - Successfully paid
router.get('/payment/sucesss/:email', auth.ensureAuthenticatedAdmin,paymentController.sucess);
router.get('/payment/cancel/:email', auth.ensureAuthenticatedAdmin,paymentController.cancel);

// GET - Private - Show Generate QR Code
router.get('/qrcode/generate', auth.ensureAuthenticatedAdmin, qrCodeController.newqrcode_get);
// POST - Private - Add QR Code
router.post('/qrcode', auth.ensureAuthenticatedAdmin,qrCodeController.qrcode_post);


module.exports = router;
