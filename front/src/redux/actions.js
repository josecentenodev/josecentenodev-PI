import axios from "axios";

export const setAllDrivers = (drivers) => ({
  type: "SET_DRIVERS",
  payload: drivers,
});

export const applyFilters = (filters) => ({
  type: "APPLY_FILTERS",
  payload: filters,
});

export const getDriversByName = (name) => {
  return async (dispatch) => {
    const API_URL = import.meta.env.VITE_API_URL;
    const { data } = await axios(`${API_URL}/drivers?name=${name}`);
    return dispatch({
      type: 'GET_DRIVERS_BY_NAME',
      payload: data
    })
  };
};
