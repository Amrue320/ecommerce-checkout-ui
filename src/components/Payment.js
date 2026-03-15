import React from "react";

function Payment({ nextStep, prevStep }) {

  return (
    <div className="container">
      <h2>Payment Method</h2>

      <label>
        <input type="radio" name="payment" />
        Credit Card
      </label>

      <label>
        <input type="radio" name="payment" />
        UPI
      </label>

      <label>
        <input type="radio" name="payment" />
        Cash on Delivery
      </label>

      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Place Order</button>
      </div>

    </div>
  );
}

export default Payment;