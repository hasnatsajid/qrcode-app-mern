const orderModel = require('../models/order');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


module.exports.sucess = async (req, res) => {
     const email = req.params.email;
     req.flash('success_msg', 'Order Created Sucessfully and Payment Paid Successfully');
     res.redirect('/admin/order/all');
};

module.exports.cancel = async (req, res) => {
     const email = req.params.email;
     req.flash('error_msg', 'Order Created Sucessfully and But Payment not Paid');
     res.redirect('/admin/order/all');
};