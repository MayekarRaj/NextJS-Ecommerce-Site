import getStripe from '../lib/getStripe';

const handleCheckout = async () => {
    const stripe = await getStripe();
  
    const response = await fetch('/api/stripe', {
      method: 'POST', // Changed from 'methods' to 'method'
      headers: {       // Changed from 'header' to 'headers'
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({'cartItems': cartItems, 'name': 'Raj Mayekar',}),
    });
  
    if (response.status === 500) return;
    
    const data = await response.json();
    toast.loading('Redirecting...');
  
    stripe.redirectToCheckout({ sessionId: data.id });
  };

export default handleCheckout;