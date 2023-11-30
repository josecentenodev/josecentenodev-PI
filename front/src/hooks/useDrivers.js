import { useState, useEffect } from "react";
import getDrivers from "../services/getDrivers";
import postDriver from "../services/postDriver";

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
    console.log(updatedDriver, driverID)
  }

  
  return { drivers, createDriver, updateDriver };
}

