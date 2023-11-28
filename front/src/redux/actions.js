import axios from "axios";

export const setAllDrivers = (drivers) => ({
type: 'SET_DRIVERS',
payload: drivers
})

export const applyFilters = (filters) => ({
    type: "APPLY_FILTERS",
    payload: filters,
  });