import axios from "axios";

export const setAllDrivers = (drivers) => ({
type: 'SET_DRIVERS',
payload: drivers
})
