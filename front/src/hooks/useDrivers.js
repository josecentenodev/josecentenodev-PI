import { useState, useEffect } from "react";
import getDrivers from "../services/getDrivers";
import postDriver from "../services/postDriver";
import putDriver from "../services/putDriver";

export default function useDrivers() {
  const [drivers, setDrivers] = useState([]);
  
  useEffect(() => {
    getDrivers().then((drivers) => {
      setDrivers(drivers);
    });
  }, [setDrivers]);

  const createDriver = (driver) => {
    postDriver(driver)
  }

  const updateDriver = (updatedDriver, driverID) => {
    putDriver(updatedDriver, driverID)
  }

  
  return { drivers, createDriver, updateDriver };
}

