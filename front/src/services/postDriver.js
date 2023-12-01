import axios from "axios";

const postDriver = async (driver) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const { data } = await axios.post(`${API_URL}/drivers/`, driver);
    return data;
  } catch (error) {
    console.error("Error en postDriver:", error);
  }
};

export default postDriver;
