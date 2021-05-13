import * as actionTypes from "../constants/pagoConstants";

export const pagoReducer = (state = { info: {} }, action) => {
  switch (action.type) {
    case actionTypes.GET_DATA_PAGO:
      return {
        info: action.payload,
      };
    case actionTypes.INSERT_DATA_PAGO:
      return {
        info: action.payload,
      };
    case actionTypes.DATA_PAGO_FAIL:
      return {
        error: action.payload,
      };
    default:
      return state;
  }s
};
