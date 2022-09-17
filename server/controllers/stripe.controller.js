import Stripe from "stripe";

const stripe = new Stripe('sk_test_51LRRJrL3LTC4xVg3TQFVTP9L7e47bRAUzjnGiBsdRZS00vyCPVi44qIv4CKCPnxjeRueg5pVNPbsDGCCBaq0rZoU00V9qzwF9X')

export const stripeCheck = async (req, res) => {
    const { price } = req.body;

    // Create a PaymentIntent with the order amount and currency
    const paymentIntent = await stripe.paymentIntents.create({
      amount: price,
      currency: "mxn",
    });
  
    res.send({
      clientSecret: paymentIntent.client_secret,
    });
}