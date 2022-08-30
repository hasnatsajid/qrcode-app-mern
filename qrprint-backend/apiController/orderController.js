const orderModel = require('../models/order');
const { order } = require('../validators/order');
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

//Registration
exports.order_post = async (req, res) => {
  const { error } = order(req.body);
  if (error) return res.status(404).json({ status: false, message:error });

  let existEmail = await orderModel.findOne({email:{'$regex' : '^'+req.body.deleteRecuiter+'$', "$options": "i"}}).lean().exec();
  if(existEmail){
     return res.status(500).json({ status: false, message:"Order Already exist with this email" });
  }
  else{
   const customer = await stripe.customers.create({
      email:req.body.email,
      name: req.body.firstName + ' ' + req.body.lastName,
      description: 'Order on QR print',
    });

      await stripe.paymentIntents.create({
         amount: req.body.amount * 100,
         currency: 'usd',
         customer: customer.id,
         payment_method: req.body.paymentId,
         off_session: true,
         confirm: true,
         description: `Charged ${req.body.firstName} ${req.body.lastName}(${req.body.email}) for Full Analysis Report with ${amount} USD`
      });
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
          qrImageLink:req.body.qrImageLink,
          paymentId: req.body.paymentId,
          status: req.body.status
     }).save();
     return res.status(200).json({ status: true, message:"Order Created Sucessfully" });
  }
};

