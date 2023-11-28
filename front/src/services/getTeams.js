import axios from "axios";

const getTeams = async () => {
  const API_URL = import.meta.env.VITE_API_URL;
  try {
    const { data } = await axios(`${API_URL}/teams`);
    return data;
  } catch (error) {
    console.error("Error en getTeams:", error);
  }
};

export default getTeams;
