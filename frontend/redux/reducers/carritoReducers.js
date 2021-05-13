import * as actionTypes from "../constants/carritoConstants";

export const getCarritoReducer = (state = { carrito: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_CARRITOID:
      return {
        carrito: action.payload,
      };
    default:
      return state;
  }
};

export const getCarritoUserReducer = (state = { usuario: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_CARRITO_USUARIO:
      return {
        usuario: action.payload,
      };
    default:
      return state;
  }
};

export const addCarritoReducer = (state = { add: {} }, action) => {
  switch (action.type) {
    case actionTypes.ADD_CARRITO:
      return {
        loading: true,
      };
    case actionTypes.ADD_CARRITO_SUCCESS:
      return {
        loading: false,
        add: action.payload,
      };
    case actionTypes.ADD_CARRITO_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const getCarritoProductsReducer = (
  state = { carritoProducts: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_CARRITO_PRODUCTS_REQUEST:
      return {
        loading: true,
        carritoProducts: [],
      };
    case actionTypes.GET_CARRITO_PRODUCTS_SUCCESS:
      return {
        loading: false,
        carritoProducts: action.payload,
      };
    case actionTypes.GET_CARRITO_PRODUCTS_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const deleteCarritoProductsReducer = (
  state = { deleteCarritoProducts: {} },
  action
) => {
  switch (action.type) {
    case actionTypes.DELETE_CARRITO_PRODUCTS_REQUEST:
      return {
        deleteLoading: true,
      };
    case actionTypes.DELETE_CARRITO_PRODUCTS_SUCCESS:
      return {
        deleteLoading: false,
        deleteCarritoProducts: action.payload,
      };
    case actionTypes.DELETE_CARRITO_PRODUCTS_FAIL:
      return {
        deleteLoading: false,
        deleteError: action.payload,
      };
    default:
      return state;
  }
};

export const getCarritoProductReducer = (
  state = { carritoProduct: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.GET_CARRITO_PRODUCT_REQUEST:
      return {
        loading: true,
        carritoProduct: [],
      };
    case actionTypes.GET_CARRITO_PRODUCT_SUCCESS:
      return {
        loading: false,
        carritoProduct: action.payload,
      };
    case actionTypes.GET_CARRITO_PRODUCT_FAIL:
      return {
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};

export const updateCarritoProductReducer = (
  state = { updateCarritoProduct: [] },
  action
) => {
  switch (action.type) {
    case actionTypes.UPDATE_CARRITO_PRODUCT_REQUEST:
      return {
        updateLoading: true,
        updateCarritoProduct: [],
      };
    case actionTypes.UPDATE_CARRITO_PRODUCT_SUCCESS:
      return {
        updateLoading: false,
        updateCarritoProduct: action.payload,
      };
    case actionTypes.UPDATE_CARRITO_PRODUCT_FAIL:
      return {
        updateLoading: false,
        updateError: action.payload,
      };
    default:
      return state;
  }
};
