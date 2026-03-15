import React from "react";

function Cart({ nextStep }) {

  return (
    <div className="container">
      <h2>Shopping Cart</h2>

      <div className="card">
        <p>Product: Smart Watch</p>
        <p>Price: ₹2999</p>
      </div>

      <button onClick={nextStep}>Proceed to Address</button>
    </div>
  );
}

export default Cart;