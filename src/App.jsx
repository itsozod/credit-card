import { useState } from "react";
import "./App.css";
import CreditCard from "./components/creditCard/CreditCard";
import Form from "./components/Form/Form";

function App() {
  return (
    <>
      <CreditCard>
        <Form />
      </CreditCard>
    </>
  );
}

export default App;
