import Razorpay from "razorpay";

// POST API to create an order
export async function POST(req) {
  try {
    const { amount } = await req.json();

    // Create Razorpay instance with your test keys

    const instance = new Razorpay({
      key_id: process.env.RAZORPAY_KEY_ID,
      key_secret: process.env.RAZORPAY_KEY_SECRET,
    });

    // Order options

    const options = {
      amount: amount, // in paise
      currency: "INR",
      receipt: "receipt_" + Math.floor(Math.random() * 10000), // random receipt number
      payment_capture: 1, // auto capture payment
    };

    // Create order
    const order = await instance.orders.create(options);

    // Send order back to frontend
    return new Response(JSON.stringify(order), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ error: error.message }), { status: 500 });
  }
}


// {
//   "id": "order_N7wxyz123",
//   "entity": "order",
//   "amount": 50000,
//   "amount_paid": 0,
//   "amount_due": 50000,
//   "currency": "INR",
//   "receipt": "receipt_8472",
//   "status": "created"
// }
