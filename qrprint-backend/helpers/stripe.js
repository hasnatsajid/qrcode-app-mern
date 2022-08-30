const stripe = require('stripe')(process.env.STRIPE_SECRET_KEY);

module.exports.createSession = (benefit, employeeId, amount) =>
  new Promise(async (resolve, reject) => {
    try {
      const session = await stripe.checkout.sessions.create({
        payment_method_types: ['card'],
        line_items: [
          {
            price_data: {
              currency: 'usd',
              product_data: {
                name: benefit.title,
                description: benefit.shortDescription,
                images: [`${process.env.API_LINK}/img/benefits/${benefit.image}`],
              },
              unit_amount: amount * 100,
            },
            quantity: 1,
          },
        ],
        mode: 'payment',
        success_url: `${process.env.API_LINK}/api/v1/benefits/confirmfunds?benefitid=${benefit._id}&employeeid=${employeeId}&amount=${amount}`,
        cancel_url: `${process.env.SITE_LINK}/employee`,
      });

      resolve(session.id);
    } catch (error) {
      console.log(`Stripe Charge Error: ${error.stack}`);
      reject(error);
    }
  });
