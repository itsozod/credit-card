import "./App.css";
import { CreditCard } from "./components/creditCard/CreditCard";
import { CardSelection } from "./components/cardSelection/CardSelection";
import { Color } from "./hooks/ColorProvider";
import { Images } from "./hooks/ImageProvider";
import ImageSelection from "./components/ImageSelection/ImageSelection";
function App() {
  return (
    <>
      <Color>
        <Images>
          <CardSelection />
          <CreditCard />
          <ImageSelection />
        </Images>
      </Color>
    </>
  );
}

export default App;
