import { ADD_TO_CART } from "./actionsTypes";

const initialState = {
  cartStatus: true,
  cartProducts: [],
};

export default function cartReducer(state = initialState, action) {
  switch (action.type) {
    case ADD_TO_CART:
      const { id, name, category, url, price, quantity } = action.payload;

      const cartProduct = { id, name, category, url, price, quantity };

      console.log(cartProduct);

      return {
        ...state,
        cart: [...state.cart, cartProduct],
      };
    default:
      return state;
  }
}
