import * as actionTypes from "../constants/productsConstants";

export const getMonedaReducer = (state = { moneda: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_MONEDA: {
      return {
        moneda: action.payload,
      };
    }
    default:
      return state;
  }
};

export const getProductsReducer = (state = { products: [] }, action) => {
  switch (action.type) {
    case actionTypes.GET_PRODUCTS_REQUEST:
      return {
        loading: true,
        products: [],
      };
    case actionTypes.GET_PRODUCTS_SUCCESS:
      return {
        loading: false,
        products: action.payload,
      };
    case actionTypes.GET_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
