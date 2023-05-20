import axios from "axios";
import { ADD_TO_CART, DELETE_CART_SUCCESS } from "../actionTypes";
import {
  getProductsFailureAction,
  getProductsRequestAction,
} from "../products/action";

export const addToCartAction = (payload) => {
  return { type: ADD_TO_CART, payload };
};

export const deleteCartSuccessAction = (payload) => {
  return { type: DELETE_CART_SUCCESS, payload };
};

export const addToCart = (cart) => (dispatch) => {
  dispatch(addToCartAction(cart));
};

export const deleteCart = (id) => async (dispatch) => {
  try {
    dispatch(getProductsRequestAction());
    const res = await axios.delete(`https://fakestoreapi.com/products/${id}`);
    dispatch(deleteCartSuccessAction(res.data));
  } catch (error) {
    dispatch(getProductsFailureAction(error.message));
  }
};
