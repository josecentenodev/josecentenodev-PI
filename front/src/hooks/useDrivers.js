import { useState, useEffect } from "react";
import getDrivers from "../services/getDrivers";

export default function useDrivers() {
  const [drivers, setDrivers] = useState([]);
  
  useEffect(() => {
    getDrivers().then((drivers) => {
      setDrivers(drivers);
    });
  }, [setDrivers]);

  
  return {  drivers };
}

