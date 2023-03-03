import cartReducer from "./cart/cartReducer";
import reducer from "./product/reducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  products: reducer,
  cart: cartReducer,
});

export default rootReducer;
