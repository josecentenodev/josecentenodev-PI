import { useState, useEffect } from "react";
import getSingleDriver from "../services/getSingleDriver";

export default function useSingleDriver(id) {
  const [driver, setDriver] = useState({});
  useEffect(() => {
    getSingleDriver(id).then((driver) => {
      setDriver(driver);
    });
  }, [setDriver]);

  return { driver };
}
