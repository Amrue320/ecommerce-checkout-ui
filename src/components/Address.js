import React from "react";

function Address({ nextStep, prevStep }) {

  return (
    <div className="container">
      <h2>Shipping Address</h2>

      <input placeholder="Full Name" />
      <input placeholder="Address" />
      <input placeholder="City" />
      <input placeholder="Pincode" />

      <div>
        <button onClick={prevStep}>Back</button>
        <button onClick={nextStep}>Proceed to Payment</button>
      </div>

    </div>
  );
}

export default Address;