/* eslint-disable react/prop-types */
import { useState, createContext } from "react";
export const ImageProvider = createContext(null);

// Component to wrap around whole app and change its state
export const Images = ({ children }) => {
  const [cardImage, setCardImage] = useState("image2.webp");
  const handleCardImage = (img) => {
    setCardImage(img);
  };

  return (
    <ImageProvider.Provider value={[cardImage, handleCardImage]}>
      {children}
    </ImageProvider.Provider>
  );
};
