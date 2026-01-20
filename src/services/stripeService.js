const Stripe = require("stripe");
const stripe = new Stripe(process.env.STRIPE_SECRET_KEY);

exports.createPayment = async (amount) => {
  return stripe.paymentIntents.create({
    amount,
    currency: "usd",
  });
};
