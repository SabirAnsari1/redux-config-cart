import axios from "axios";
import {
  PRODUCTS_FAILURE,
  PRODUCTS_REQUEST,
  GET_PRODUCTS_SUCCESS,
} from "../actionTypes";

export const getProductsRequestAction = () => {
  return { type: PRODUCTS_REQUEST };
};

export const getProductsFailureAction = (payload) => {
  return { type: PRODUCTS_FAILURE, payload };
};

export const getProductsSuccessAction = (payload) => {
  return { type: GET_PRODUCTS_SUCCESS, payload };
};

export const getProducts = (paramObj) => async (dispatch) => {
  try {
    dispatch(getProductsRequestAction());
    const res = await axios.get(`https://fakestoreapi.com/products`, paramObj);
    dispatch(getProductsSuccessAction(res.data));
  } catch (error) {
    dispatch(getProductsFailureAction(error.message));
  }
};
