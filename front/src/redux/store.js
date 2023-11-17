import { applyMiddleware, legacy_createStore, compose } from "redux";
import favoriteReducer from "./reducer";
import ThunkMiddleware from "redux-thunk";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  favoriteReducer,
  composeEnhancers(applyMiddleware(ThunkMiddleware))
);

export default store;
