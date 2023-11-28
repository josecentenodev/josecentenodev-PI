import { useState, useEffect } from "react";
import axios from "axios";
import getDrivers from "../services/getDrivers";

export default function useDrivers() {
  const API_URL = import.meta.env.VITE_API_URL;
  const [driver, setDriver] = useState({});
  const [drivers, setDrivers] = useState([]);

  useEffect(() => {
    getDrivers().then((drivers) => {
      setDrivers(drivers);
    });
  }, [setDrivers]);

  const getDriver = async (id) => {
    try {
      const { data } = await axios(`${API_URL}/drivers/${id}`);

      return data ? setDriver(data) : window.alert("woops! algo fallo!");
    } catch (error) {
      console.error("Error en getDriver:", error);
    }
  };

  return { driver, drivers, getDriver };
}
