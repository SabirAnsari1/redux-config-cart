import { legacy_createStore, combineReducers, applyMiddleware } from "redux";
import { reducer as authReducer } from "../redux/auth/reducer";
import { reducer as cartReducer } from "../redux/cart/reducer";
import { reducer as productsReducer } from "../redux/products/reducer";

const rootReducer = combineReducers({
  authReducer,
  cartReducer,
  productsReducer,
});

const myMiddleware = (store) => (dispatch) => (action) => {
  if (typeof dispatch === "function") {
    return action(dispatch);
  }
  return dispatch(action);
};

export const store = legacy_createStore(
  rootReducer,
  applyMiddleware(myMiddleware)
);
