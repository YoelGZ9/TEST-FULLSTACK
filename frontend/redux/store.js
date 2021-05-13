import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";

// Reducers
import {
  getProductsReducer,
  getMonedaReducer,
} from "./reducers/productsReducers";
import { pagoReducer } from "./reducers/pagoReducers";
import {
  getCarritoReducer,
  addCarritoReducer,
  getCarritoProductsReducer,
  deleteCarritoProductsReducer,
  getCarritoProductReducer,
  updateCarritoProductReducer,
  getCarritoUserReducer,
} from "./reducers/carritoReducers";

const reducer = combineReducers({
  getProducts: getProductsReducer,
  getCarrito: getCarritoReducer,
  addCarrito: addCarritoReducer,
  getCarritoProducts: getCarritoProductsReducer,
  deleteCarritoProducts: deleteCarritoProductsReducer,
  getCarritoProduct: getCarritoProductReducer,
  updateCarritoProduct: updateCarritoProductReducer,
  getCarritoUser: getCarritoUserReducer,
  pago: pagoReducer,
  getMoneda: getMonedaReducer,
});

const middleware = [thunk];

let INITIAL_STATE = {};

if (typeof window !== "undefined") {
  const cartIDFromLocalStorage = localStorage.getItem("cartID")
    ? localStorage.getItem("cartID")
    : "";
  INITIAL_STATE = {
    getCarrito: {
      carrito: cartIDFromLocalStorage,
    },
    getMoneda: {
      moneda: localStorage.getItem("moneda")
        ? localStorage.getItem("moneda")
        : "MXN",
    },
  };
}

const store = createStore(
  reducer,
  INITIAL_STATE,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
