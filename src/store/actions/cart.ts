import { ProductType } from "../reducers/cart";

export const ADD_TO_CART = "ADD_TO_CART";
export const INCREASE_QUANTITY = "INCREASE_QUANTITY";
export const DECREASE_QUANTITY = "DECREASE_QUANTITY";
export const REMOVE_FROM_CART = "REMOVE_FROM_CART";

// Example: Defining specific action types
export interface AddToCartAction {
  type: string;
  payload: Partial<ProductType>;
}
export interface increaseQuantityAction {
  type: string;
  payload: string;
}

export interface decreaseQuantityAction {
  type: string;
  payload: string;
}

export const addToCart = (item: Partial<ProductType>) => {
  return {
    type: ADD_TO_CART,
    payload: item,
  };
};

export const increaseQuantity = (itemName: string) => {
  return {
    type: INCREASE_QUANTITY,
    payload: itemName,
  };
};

export const decreaseQuantity = (itemName: string) => {
  return {
    type: DECREASE_QUANTITY,
    payload: itemName,
  };
};

export const removeFromCart = (itemName: string) => {
  return {
    type: REMOVE_FROM_CART,
    payload: itemName,
  };
};
