import * as actionTypes from "../constants/pagoConstants";
import axios from "axios";

export const pago = (id) => async (dispatch, getState) => {
  try {
    const { data } = await axios.get(`http://localhost:5000/carritos/${id}`);
    dispatch({
      type: actionTypes.GET_DATA_PAGO,
      payload: data,
    });
    localStorage.setItem("cartItems", JSON.stringify(getState().pago.info));
    const infoUpdate = { estatus: "pagado" };
    const { dataUpdate } = await axios.put(
      `http://localhost:5000/carritoProduct/${id}`,
      infoUpdate
    );
    dispatch({
      type: actionTypes.INSERT_DATA_PAGO,
      payload: dataUpdate,
    });
  } catch (error) {
    dispatch({
      type: actionTypes.DATA_PAGO_FAIL,
      payload:
        error.response && error.response.data.message
          ? error.response.data.message
          : error.message,
    });
  }
};
