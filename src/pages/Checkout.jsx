// Checkout.jsx

import React from 'react';

const Checkout = () => {
  const cartItems = []; // Replace with actual cart items from context or state
  const totalAmount = cartItems.reduce((acc, item) => acc + item.price * item.quantity, 0);

  const handlePlaceOrder = () => {
    // Logic to place the order
    alert('Order placed successfully!');
  };

  return (
    <div className="checkout">
      <h1>Checkout</h1>
      <div className="order-summary">
        <h2>Order Summary</h2>
        {cartItems.map(item => (
          <div key={item.id}>
            <p>{item.name} - {item.quantity} x ${item.price}</p>
          </div>
        ))}
        <h3>Total: ${totalAmount.toFixed(2)}</h3>
      </div>
      <button onClick={handlePlaceOrder}>Place Order</button>
    </div>
  );
};

export default Checkout;
