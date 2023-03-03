import { ADDED, DECREMENT } from "./actionsTypes";

const initialState = [];

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case ADDED:
      const maxID = state?.reduce((a, b) => Math.max(b?.id, a), -1);
      const { name, category, url, price, quantity } = action.payload;
      return [
        ...state,
        {
          id: maxID + 1,
          name,
          category,
          url,
          price,
          quantity,
        },
      ];

    case DECREMENT:
      const updateQuantity = state.map((curElm) => {
        if (curElm.id === action.payload) {
          return { ...curElm, quantity: curElm.quantity - 1 };
        }
        return curElm;
      });
      return [...state, updateQuantity];
    default:
      return state;
  }
};

export default reducer;
