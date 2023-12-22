import { useColorChange } from "../../hooks/UseColorChange";
import styles from "./CardSelection.module.css";

export const CardSelection = () => {
  const [cardColor, handleCardColor] = useColorChange();

  // color options
  const colorsOptions = [
    "red",
    "green",
    "blue",
    "brown",
    "purple",
    "goldenrod",
  ];

  return (
    <>
      <div>
        <label>Card Color: {cardColor}</label>
      </div>
      <div>
        {colorsOptions.map((color) => (
          <button
            className={styles.btn}
            key={color}
            style={{ backgroundColor: color }}
            onClick={() => handleCardColor(color)}
          >
            {color}
          </button>
        ))}
      </div>
    </>
  );
};
