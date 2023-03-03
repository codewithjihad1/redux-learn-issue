import { ADD_TO_CART } from "./actionsTypes";

export const addToCart = (value) => {
  return {
    type: ADD_TO_CART,
    payload: value,
  };
};
