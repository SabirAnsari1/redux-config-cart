import { ADD_TO_CART, DELETE_CART_SUCCESS } from "../actionTypes";

const initialeState = {
  cart: new Array(),
};

export const reducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case ADD_TO_CART: {
      return { ...state, cart: [...state.cart, payload] };
    }
    case DELETE_CART_SUCCESS: {
      payload = state.cart?.filter((el) => el.id !== payload.id);
      return {
        ...state,
        isLoading: !state.isLoading,
        cart: payload,
      };
    }
    default:
      return state;
  }
};
