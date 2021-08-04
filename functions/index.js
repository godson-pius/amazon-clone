const functions = require("firebase-functions");
const express = require("express");
const cors = require("cors");
const stripe = require("stripe")('sk_test_51IDGQ6D0EWi5Oe56vXiIVxwT6FPt2pAy59PaMw8rX9s1mwyOoG1xU4yX32aor3iYBSeu9NuoaeMEdN2Q5Wva1PWP00MvXPeA2M');

// API


// App Config
const app = express();


// Middlewares
app.use(cors({ origin: true }));
app.use(express.json());


// API Routes
app.get('/', (request, response) => response.status(200).send('hello world'))

app.post('/payment/create', async (request, response) => {
    const total = request.query.total;

    console.log('Payment Request Received BOOM!! for this amount >>> ', total);

    const paymentIntent = await stripe.paymentIntents.create({
        amount: total, // The subunit
        currency: "usd",
    });

    // Ok - Created
    response.status(201).send({
        clientSecret: paymentIntent.client_secret,
    });
});

// Listen Command
exports.api = functions.https.onRequest(app)

//example endpoint
// http://localhost:5001/challenge-9e36d/us-central1/api