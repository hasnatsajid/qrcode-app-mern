// Packages
const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);


// Get Employer Payment Method
module.exports.fetchEmployerPaymentMethod = (stripeCustomerId) =>
  new Promise(async (resolve, reject) => {
    try {
      const paymentMethods = await stripe.paymentMethods.list({
        customer: stripeCustomerId,
        type: 'card',
      });

      resolve(paymentMethods.data);
    } catch (error) {
      console.log('fetchEmployerPaymentMethod Error: ', error);
      reject(error);
    }
  });

// Create new Stripe Customer
module.exports.createNewStripeCustomer = (name, email) =>
  new Promise(async (resolve, reject) => {
    try {
      const customer = await stripe.customers.create({
        email,
        name,
        description: 'Employer on Climate Benefit',
      });

      resolve(customer.id);
    } catch (error) {
      console.log('createNewStripeCustomer Error: ', error);
      reject(error);
    }
  });