const { createPayment } = require("../services/stripeService");

exports.pay = async (req, res) => {
  const intent = await createPayment(req.body.amount);
  res.json(intent);
};
