import { useState, useEffect } from "react";
import getSingleDriver from "../services/getSingleDriver";

export default function useSingleDriver(id) {
  const [driver, setDriver] = useState({});
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setLoading(true);
    getSingleDriver(id).then((driver) => {
      setDriver(driver);
    }).finally(() => {
        setLoading(false); // Establece loading en false después de cargar los datos
      });
  }, [setDriver, id]);

  return { driver, loading };
}
