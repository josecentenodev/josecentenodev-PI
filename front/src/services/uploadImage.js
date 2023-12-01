import axios from "axios";

const uploadImage = async (file) => {

  const API_URL = "http://localhost:3001";
  try {
    const { data } = await axios.post(`${API_URL}/upload/`, file);
    return data;
  } catch (error) {
    console.error("Error en uploadImage:", error);
  }
};

export default uploadImage;
