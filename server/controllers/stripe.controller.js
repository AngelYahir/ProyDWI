import Stripe from "stripe";

const stripe = new Stripe('sk_test_51IPd6xG3jRLaAqrO4Jpfda1PEG22AJdWMCBOZbtJAwPKNn5OKCnLXv19UHuEOi7RWbsafkmyf0ekK89vNh1ROuw900yaW19gbL')

export const stripeCheck = async (req, res) => {
    const { id, amount, desc } = req.body;

    try {
      const payment = await stripe.paymentIntents.create({
        amount,
        description: desc,
        currency: "MXN",
        payment_method: id,
        confirm: true
      })

      console.log(payment)

      return res.status(200).json({message: "Successful Payment"})
    } catch (error) {
      console.log(error)
      return res.json({message: error.raw.message})
    }
}