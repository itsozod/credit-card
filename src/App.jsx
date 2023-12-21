import "./App.css";
import { CreditCard } from "./components/creditCard/CreditCard";
import { CardSelection } from "./components/cardSelection/CardSelection";
import { Color } from "./hooks/ColorProvider";
import { Images } from "./hooks/ImageProvider";
function App() {
  return (
    <>
      <Color>
        <Images>
          <CardSelection />
          <CreditCard />
        </Images>
      </Color>
    </>
  );
}

export default App;
