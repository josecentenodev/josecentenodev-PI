import axios from "axios";

const getSingleDriver = async (id) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const { data } = await axios(`${API_URL}/drivers/${id}`);
    return data;
  } catch (error) {
    console.error("Error en getDriver:", error);
  }
};

export default getSingleDriver;
