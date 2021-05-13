import * as actionTypes from "../constants/carritoConstants";
import axios from "axios";

export const getCarrito = (id) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_CARRITOID,
    payload: id,
  });
  localStorage.setItem("cartID", getState().getCarrito.carrito);
};

export const getCarritoUser = (user) => (dispatch, getState) => {
  dispatch({
    type: actionTypes.GET_CARRITO_USUARIO,
    payload: user,
  });
  localStorage.setItem("usuario", getState().getCarritoUser.usuario);
};

export const addCarrito = (id, datos) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.ADD_CARRITO });
    let nuevo = true;
    const { data } = await axios.get(`http://localhost:5000/carritos/${id}`);
    data.map((x) => {
      if (x.productoID._id === datos.productoID) {
        nuevo = false;
      }
    });
    if (nuevo) {
      datos.carritoID = id;
      const { message } = await axios.post(
        `http://localhost:5000/carritos`,
        datos
      );
    }
    dispatch({
      type: actionTypes.ADD_CARRITO_SUCCESS,
      payload: nuevo
        ? "El producto se agrego al carrito"
        : "El producto ya existe en el carrito",
    });
  } catch (error) {
    dispatch({
      type: actionTypes.ADD_CARRITO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCarritoProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CARRITO_PRODUCTS_REQUEST });
    const { data } = await axios.get(`http://localhost:5000/carritos/${id}`);
    dispatch({
      type: actionTypes.GET_CARRITO_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CARRITO_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const deleteCarritoProducts = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.DELETE_CARRITO_PRODUCTS_REQUEST });
    const { data } = await axios.delete(`http://localhost:5000/carritos/${id}`);
    dispatch({
      type: actionTypes.DELETE_CARRITO_PRODUCTS_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DELETE_CARRITO_PRODUCTS_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const getCarritoProduct = (id) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.GET_CARRITO_PRODUCT_REQUEST });
    const { data } = await axios.get(
      `http://localhost:5000/carritoProduct/${id}`
    );
    dispatch({
      type: actionTypes.GET_CARRITO_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.GET_CARRITO_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};

export const updateCarritoProduct = (id, datos) => async (dispatch) => {
  try {
    dispatch({ type: actionTypes.UPDATE_CARRITO_PRODUCT_REQUEST });
    const { data } = await axios.put(
      `http://localhost:5000/carritos/${id}`,
      datos
    );
    dispatch({
      type: actionTypes.UPDATE_CARRITO_PRODUCT_SUCCESS,
      payload: data,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.UPDATE_CARRITO_PRODUCT_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
