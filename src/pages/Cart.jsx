// Cart.jsx

import React, { useContext } from 'react';
import CartItem from '../components/CartItem';

const Cart = () => {
  const cartItems = []; // Replace with actual cart items from context or state

  const handleRemoveItem = (id) => {
    // Remove item from cart
  };

  const handleUpdateQuantity = (item, newQuantity) => {
    // Update item quantity
  };

  return (
    <div className="cart">
      <h1>Your Cart</h1>
      {cartItems.length > 0 ? (
        cartItems.map(item => (
          <CartItem
            key={item.id}
            item={item}
            onRemove={handleRemoveItem}
            onUpdateQuantity={handleUpdateQuantity}
          />
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
      <button>Proceed to Checkout</button>
    </div>
  );
};

export default Cart;
