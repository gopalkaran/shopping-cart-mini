import { combineReducers } from "redux";
import cartReducer, { CartType } from "./cart";

const allReducers = combineReducers({
  cart: cartReducer,
});

export interface RootState {
  cart: CartType;
}

export default allReducers;
