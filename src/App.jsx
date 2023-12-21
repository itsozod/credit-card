import { useState } from "react";
import "./App.css";
import CreditCard from "./components/creditCard/CreditCard";
import Form from "./components/Form/Form";
import { createContext } from "react";
export const ChangeStates = createContext(null);

function App() {
  const [cardHolder, setCardHolder] = useState("Card holder");
  return (
    <>
      <ChangeStates.Provider value={[cardHolder, setCardHolder]}>
        <CreditCard>
          <Form />
        </CreditCard>
      </ChangeStates.Provider>
    </>
  );
}

export default App;
