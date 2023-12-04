import axios from "axios";

const putDriver = async (driver, driverID) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const { data } = await axios.put(`${API_URL}/drivers/${driverID}`, driver);
    return data;
  } catch (error) {
    console.error("Error en putDriver:", error);
  }
};

export default putDriver;