require("dotenv").config()
const stripe = require(`stripe`)(process.env.STRIPE_KEY)

const stripeController = async (req,res) => {
 const{purchase, total_amount, shipping_fee} = req.body;

 const calcTotal = () => {
     return total_amount + shipping_fee;
 }

 const paymentIntent = await stripe.paymentIntent.create({
     amount: calcTotal(),
     currency:"usd",
 })

 res.json({clientSecret: paymentIntent.client_sercret})
};


module.exports = stripeController;