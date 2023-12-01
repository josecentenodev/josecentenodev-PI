import axios from "axios";

const getDrivers = async () => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const { data } = await axios(`${API_URL}/drivers`);
    return data;
  } catch (error) {
    console.error("Error en getDrivers:", error);
  }
};

export default getDrivers;
