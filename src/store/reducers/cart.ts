import {
  ADD_TO_CART,
  AddToCartAction,
  DECREASE_QUANTITY,
  decreaseQuantityAction,
  INCREASE_QUANTITY,
  increaseQuantityAction,
  REMOVE_FROM_CART,
} from "../actions/cart";

export type ProductType = {
  name: string;
  image: string;
  price: number;
  quantity: number;
  [key: string]: string | number;
};

export type CartType = {
  cartItems: ProductType[];
  subTotal: number;
  discounts: number;
  totalPrice: number;
};
const initialState: CartType = {
  cartItems: [],
  subTotal: 0,
  discounts: 0,
  totalPrice: 0,
};

type MyActions =
  | AddToCartAction
  | increaseQuantityAction
  | decreaseQuantityAction;

const cartReducer = (state = initialState, action: MyActions) => {
  switch (action.type) {
    case ADD_TO_CART: {
      if (
        state.cartItems?.find(
          (item) => item.name === (action.payload as ProductType).name
        )?.name
      ) {
        const updatedState = state.cartItems?.map((item) => {
          return item.name === (action.payload as ProductType).name
            ? { ...item, quantity: item.quantity + 1 }
            : item;
        });
        const subTotal = updatedState?.reduce((acc, cur) => {
          const individualItemCost = cur.price * cur.quantity;
          acc = acc + individualItemCost;
          return acc;
        }, 0);
        return {
          ...state,
          cartItems: updatedState,
          subTotal,
          totalPrice: subTotal - (subTotal * state.discounts) / 100,
        };
      } else {
        const subTotal =
          state.cartItems?.length > 0
            ? state.cartItems?.reduce((acc, cur) => {
                const individualItemCost = cur.price * cur.quantity;
                acc = acc + individualItemCost;
                return acc;
              }, 0) + (action.payload as ProductType)?.price
            : (action.payload as ProductType)?.price;
        return {
          ...state,
          cartItems: state.cartItems?.concat({
            ...(action.payload as ProductType),
            quantity: 1,
          } as ProductType),
          subTotal: subTotal,
          discounts: 10,
          totalPrice: subTotal - (subTotal * state.discounts) / 100,
        };
      }
    }
    case INCREASE_QUANTITY: {
      const updatedCartItems = state.cartItems?.map((item) =>
        item.name === action.payload
          ? { ...item, quantity: item.quantity + 1 }
          : item
      );
      const subTotal = updatedCartItems?.reduce((acc, cur) => {
        const individualItemCost = cur.price * cur.quantity;
        acc = acc + individualItemCost;
        return acc;
      }, 0);
      return {
        ...state,
        cartItems: updatedCartItems,
        subTotal,
        totalPrice: subTotal - (subTotal * state.discounts) / 100,
      };
    }
    case DECREASE_QUANTITY: {
      const updatedItems = state.cartItems?.map((item) =>
        item.name === action.payload
          ? { ...item, quantity: item.quantity - 1 }
          : item
      );
      const updatedCartItems = updatedItems?.filter((item) => item.quantity);
      const subTotal = updatedCartItems?.reduce((acc, cur) => {
        const individualItemCost = cur.price * cur.quantity;
        acc = acc + individualItemCost;
        return acc;
      }, 0);
      return {
        ...state,
        cartItems: updatedCartItems,
        subTotal,
        totalPrice: subTotal - (subTotal * state.discounts) / 100,
      };
    }
    case REMOVE_FROM_CART: {
      const updatedItems = state.cartItems?.filter(
        (item) => item.name !== action.payload
      );
      const updatedCartItems = updatedItems?.filter((item) => item.quantity);
      const subTotal = updatedCartItems?.reduce((acc, cur) => {
        const individualItemCost = cur.price * cur.quantity;
        acc = acc + individualItemCost;
        return acc;
      }, 0);
      return {
        ...state,
        cartItems: updatedCartItems,
        subTotal,
        totalPrice: subTotal - (subTotal * state.discounts) / 100,
      };
    }
    default:
      return state;
  }
};

export default cartReducer;
