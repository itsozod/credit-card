import { useContext } from "react";
import { ImageProvider } from "./ImageProvider";

export const useImageChange = () => {
  return useContext(ImageProvider);
};
