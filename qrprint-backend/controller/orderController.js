const orderModel = require('../models/order');
// const   userModel = require('../models/User');
// const { deleteFile } = require('../utils/awsFunctions');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


module.exports.order_get = async (req, res) => {
     const status = req.params.status ? req.params.status : 'all';
     let orders;
     if(status == "all"){
          orders = await orderModel.find().lean();
     }
     else{
          orders = await orderModel.find({status:status.trim()}).lean();
     }
     res.render('orders/order', { orders,status});
};

module.exports.neworder_get = async (req, res) => {
  res.render('orders/new');
};

const createSession = (data) =>
  new Promise(async (resolve, reject) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: data.firstName + ' ' + data.lastName,
                description: "We are charging you"
              },
              unit_amount: data.amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${data.host}/admin/payment/sucesss/${data.email}`,
        cancel_url: `${data.host}/admin/payment/cancel/${data.email}`,
      });
      let res = {
        url : session.url,
        id : session.id
      }
      resolve(res);
    } catch (error) {
      console.log(`Stripe Charge Error: ${error.stack}`);
      reject(error);
    }
  });

// Create a new order
module.exports.order_post = async (req, res) => {
     let existEmail = await orderModel.findOne({email:{'$regex' : '^'+req.body.email+'$', "$options": "i"}}).lean().exec();
     if(existEmail){
          req.flash('error_msg', 'Order Already exist with this email');
          res.redirect('/admin/order/add/new');
     }
   
     else{
      let rtrn = await createSession(req.body)
      await new orderModel({
             firstName: req.body.firstName,
             lastName: req.body.lastName,
             email: req.body.email,
             phone: req.body.phone,
             city: req.body.city,
             state: req.body.state,
             zipCode: req.body.zipCode,
             country:req.body.country,
             address: req.body.address,
             amount:req.body.amount,
             paymentId:rtrn.id,
             qrImageLink:req.body.qrImageLink,
             status: req.body.status
        }).save();
        console.log("URL",rtrn.url)
        console.log("id",rtrn.id)
    // req.flash('success_msg', 'Order Created Sucessfully');
        res.redirect(rtrn.url);
  }
}
// Delete a order
module.exports.deleteorder_get = async (req, res) => {
  const { id } = req.params;
//   const foundOrder = await orderModel.findById(id);
//   await deleteFile(foundProduct.image);

  await orderModel.findByIdAndDelete(id);

  req.flash('success_msg', 'Order deleted!');
  res.redirect('/admin/order/all');
};

module.exports.editOrder_get = async (req, res) => {
    const order = await orderModel.findOne({_id:req.params.id}).lean().exec();
    res.render('orders/edit', {order});
};

module.exports.order_put = async (req, res) => {
  console.log(req.body.id)
  await orderModel.findByIdAndUpdate(
    req.body.id,
    {
          firstName: req.body.firstName,
          lastName: req.body.lastName,
          email: req.body.email,
          phone: req.body.phone,
          city: req.body.city,
          state: req.body.state,
          zipCode: req.body.zipCode,
          address: req.body.address,
          amount:req.body.amount,
          qrImageLink:req.body.qrImageLink,
          status: req.body.status
    },
    { new: true}
  );
  req.flash('success_msg', 'Order Updated Sucessfully!');
  res.redirect('/admin/order/all');
};