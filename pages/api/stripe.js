// import { P } from '@/ecommerce-app/dist/static/sanity-079a9bbc';
import Stripe from 'stripe';

const stripe = new Stripe( process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY );

// const stripe = require('stripe')(process.env.NEXT_PUBLIC_STRIPE_SECRET_KEY);

export default async function handler(req, res) {
  if (req.method === 'POST') {
    console.log(req.body);
    // const { name, address } = req.body.customerInfo;
    const name = req.body.name;
    // const address = req.body.address;

    try {
        const params = {
            submit_type: 'pay',
            mode: 'payment',
            payment_method_types: ['card'],
            billing_address_collection: 'required',
            shipping_options: [
                {shipping_rate: 'shr_1OQZpXSCkHgr3oGO4mBISevd'},
                {shipping_rate: 'shr_1OQZqiSCkHgr3oGOJeKRnxet'},
            ],
            line_items: req.body.cartItems.map((item) => {
                const img = item.image[0].asset._ref;
                const newImage = img.replace('image-', 'https://cdn.sanity.io/images/bzke85d0/production/').replace('-webp','.webp')
                console.log('IMAGE', newImage);

                return {
                    price_data: {
                        currency: 'inr',
                        product_data: {
                            name: item.name,
                            images: [newImage],
                        },
                        unit_amount: item.price * 100,
                    },
                    adjustable_quantity: {
                        enabled: true,
                        minimum: 1,
                    },
                    quantity: item.quantity,
                }
            }),
            success_url: `${req.headers.origin}/?success=true`,
            cancel_url: `${req.headers.origin}/?canceled=true`,
            customer_email: "mayekaraj05@gmail.com", // Assuming customer email is provided
            // customer: {
            //     name: name,
            //     address: {
            //         line1: "L.J. Road",
            //         line2: "Shivaji Park",
            //         city: "Dadar",
            //         state: "Maharashtra",
            //         postal_code: "400028",
            //         country: 'IN', // Ensure the country code is for India
            //     },
            // },


        };  
        // Create Checkout Sessions from body params.
        console.log(params);
        const session = await stripe.checkout.sessions.create(params);
        res.status(200).json(session);
    } catch (err) {
      res.status(err.statusCode || 500).json(err.message);
    }
  } else {
    res.setHeader('Allow', 'POST');
    res.status(405).end('Method Not Allowed');
  }
}