import "./App.css";
import { CreditCard } from "./components/creditCard/CreditCard";
import { CardSelection } from "./components/cardSelection/CardSelection";
import { Images } from "./hooks/ImageProvider";
import ImageSelection from "./components/ImageSelection/ImageSelection";
function App() {
  return (
    <>
      <Images>
        <CardSelection />
        <CreditCard />
        <ImageSelection />
      </Images>
    </>
  );
}

export default App;
