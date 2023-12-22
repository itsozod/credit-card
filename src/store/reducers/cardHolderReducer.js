import { CHANGECARDHOLDER } from "../actions/cardHolderAction";
import { cardHolder } from "../data/cardHolderData";
export const cardHolderReducer = (state = cardHolder, action) => {
  switch (action.type) {
    case CHANGECARDHOLDER:
      return { ...state, name: action.payload };
    default:
      return state;
  }
};
