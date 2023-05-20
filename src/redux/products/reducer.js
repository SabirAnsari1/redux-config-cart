import {
  GET_PRODUCTS_SUCCESS,
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
} from "../actionTypes";

const initialeState = {
  isLoading: false,
  isError: false,
  errMessage: "",
  products: new Array(),
};

export const reducer = (state = initialeState, { type, payload }) => {
  switch (type) {
    case PRODUCTS_REQUEST: {
      return { ...state, isLoading: true, isError: false };
    }
    case PRODUCTS_FAILURE: {
      return {
        ...state,
        isLoading: false,
        isError: true,
        errMessage: payload,
      };
    }
    case GET_PRODUCTS_SUCCESS: {
      return {
        ...state,
        isLoading: false,
        products: payload,
      };
    }
    default:
      return state;
  }
};
