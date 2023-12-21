import { useContext } from "react";
import { ColorProvider } from "./ColorProvider";

export const useColorChange = () => {
  return useContext(ColorProvider);
};
