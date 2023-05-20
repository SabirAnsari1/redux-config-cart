import axios from "axios";
import { LOGIN_FAILURE, LOGIN_REQUEST, LOGIN_SUCCESS } from "../actionTypes";

export const loginRequestAction = () => {
  return { type: LOGIN_REQUEST };
};

export const loginSuccessAction = (payload) => {
  return { type: LOGIN_SUCCESS, payload };
};

export const loginFailureAction = (payload) => {
  return { type: LOGIN_FAILURE, payload };
};

export const userLogin = (user) => async (dispatch) => {
  try {
    dispatch(loginRequestAction());
    const res = await axios.post(`https://reqres.in/api/login`, user);
    dispatch(loginSuccessAction(res.data.token));
  } catch (error) {
    dispatch(loginFailureAction(error.message));
  }
};
