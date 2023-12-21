/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
export const ColorProvider = createContext(null);

// Component to wrap around whole app and change its state
export const Color = ({ children }) => {
  const [cardColor, setCardColor] = useState("green");

  const handleCardColor = (color) => {
    setCardColor(color);
  };

  return (
    <ColorProvider.Provider value={[cardColor, handleCardColor]}>
      {children}
    </ColorProvider.Provider>
  );
};
