import { useState } from "react";
import axios from "axios";

export default function useDrivers() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [driver, setDriver] = useState({});

  const getDrivers = async () => {
    try {
      const { data } = await axios(`${API_URL}/drivers`);
      return data
    } catch (error) {
      console.error("Error en getDrivers:", error);
    }
  };

  const getDriver = async (id) => {
    try {
      const { data } = await axios(`${API_URL}/drivers/${id}`);

      return data ? setDriver(data) : window.alert("woops! algo fallo!");
    } catch (error) {
      console.error("Error en getDrivers:", error);
    }
  };

  return { driver, getDrivers, getDriver };
}
