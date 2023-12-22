import { combineReducers } from "redux";
import { cardHolderReducer } from "./cardHolderReducer";
import { changeColorReducer } from "./changeColorReducer";
export const reducer = combineReducers({
  cardHolderReducer,
  changeColorReducer,
});
