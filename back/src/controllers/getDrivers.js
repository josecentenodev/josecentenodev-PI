const {
  getDriversByName,
  getAllDrivers,
} = require("../services/getDriversService");
// Mi primer aproach con este codigo fue solo llamar a los drivers, sin filtrarlos por query.
// Mi intencion era agregar otra ruta al router 'api/drivers/search?name='' pero
// ya estoy usando una ruta 'api/drivers/:id' y no sabia por que me estaba arrojando 404
// mi ruta search?name.
// Despues descubri que para que funcione tiene que estar la ruta declarada antes del param id.
// Esto me llevo a refactorizar y modularizar de esta manera. Not Bad, pero fueron horas.

async function getDrivers(req, res) {
  try {
    const { name } = req.query;
    if (name) {
      const filteredDrivers = await getDriversByName(name);
      res.status(200).json(filteredDrivers);
    } else {
      const allDrivers = await getAllDrivers();
      res.status(200).json(allDrivers);
    }
  } catch (error) {
    res.status(error.status).json({ message: error.message });
  }
}

module.exports = getDrivers;
