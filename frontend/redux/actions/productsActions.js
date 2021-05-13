import * as actionTypes from "../constants/productsConstants";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_PRODUCTS_REQUEST });

    const { data } = await axios.get("http://localhost:5000/cars");

    dispatch({
      type: actionTypes.GET_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getMoneda = (moneda) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_MONEDA,
    payload: moneda,
  });
  localStorage.setItem("moneda", getState().getMoneda.moneda);
};
