import axios from "axios";

export const getAllDrivers = () => {
  return async (dispatch) => {
    const endpoint = "http://localhost:3001/api/drivers";
    const response = await axios(endpoint);
    return dispatch({
      type: "GET_DRIVERS",
      payload: response.data,
    });
  };
};
