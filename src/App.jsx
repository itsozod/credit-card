import "./App.css";
import { CreditCard } from "./components/creditCard/CreditCard";
import { CardSelection } from "./components/cardSelection/CardSelection";
import { Color } from "./hooks/ColorProvider";
function App() {
  return (
    <>
      <Color>
        <CardSelection />
        <CreditCard />
      </Color>
    </>
  );
}

export default App;
