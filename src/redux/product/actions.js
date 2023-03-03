import { ADDED, DECREMENT } from "./actionsTypes";

export const added = ({ name, category, url, price, quantity }) => {
  return {
    type: ADDED,
    payload: { name, category, url, price, quantity },
  };
};

export const quantityDecrement = (id) => {
  return {
    type: DECREMENT,
    payload: id,
  };
};
