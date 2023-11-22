const {
  getDriverFromDB,
  getDriverFromAPI,
} = require("../services/getDriverByIdService");

async function getDriverById(req, res) {
  try {
    const id = req.params.id;
    // de manera descriptiva identifico si el id que me llega por param es de tipo uuid,
    const isIdDataTypeUUID = isNaN(Number(id));
    if (isIdDataTypeUUID) {
      // si es uuid hago la peticion a la base de datos
      const driver = await getDriverFromDB(id)
      res.status(200).json(driver);
    } else {
      // caso contrario a mi api
      const driver = await getDriverFromAPI(id)
      res.status(200).json(driver);
    }
  } catch (error) {
    // Lo dejo en manos de json-server
    res.status(400).json({ message: error.message });
  }
}

module.exports = getDriverById;
