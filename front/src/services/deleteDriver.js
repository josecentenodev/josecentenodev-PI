import axios from "axios";

const deleteDriver = async (id) => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    await axios.delete(`${API_URL}/drivers/${id}`);
    console.log(`Conductor con ID ${id} eliminado correctamente.`);
  } catch (error) {
    console.error("Error en deleteDriver:", error);
    throw error
  }
};

export default deleteDriver;
