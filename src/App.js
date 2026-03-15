import React, { useState } from "react";
import Cart from "./components/Cart";
import Address from "./components/Address";
import Payment from "./components/Payment";
import Confirmation from "./components/Confirmation";
import "./App.css";

function App() {

  const [step, setStep] = useState(1);

  const nextStep = () => setStep(step + 1);
  const prevStep = () => setStep(step - 1);

  switch(step){
    case 1:
      return <Cart nextStep={nextStep} />;
    case 2:
      return <Address nextStep={nextStep} prevStep={prevStep} />;
    case 3:
      return <Payment nextStep={nextStep} prevStep={prevStep} />;
    case 4:
      return <Confirmation />;
    default:
      return <Cart nextStep={nextStep} />;
  }

}

export default App;