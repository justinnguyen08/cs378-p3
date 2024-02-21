import React from 'react';

const Cart = ({ cart, clearCart, placeOrder }) => {
  const total = cart.reduce((total, item) => total + item.price, 0);

  return (
    <div>
      <h2>Cart</h2>
        <p>Total: ${total.toFixed(2)}</p>
        <button onClick={clearCart}>Clear all</button>
        <button onClick={placeOrder}>Order</button>
    </div>
  );
};

export default Cart;
