const { Driver } = require("../../db");

async function updateDriver(req, res) {
  const { id } = req.params;
  const updatedDriverData = req.body;

  try {
    // Busca el conductor por ID
    const existingDriver = await Driver.findByPk(id);

    if (!existingDriver) {
      return res.status(404).json({ error: "Conductor no encontrado" });
    }

    // Actualiza el conductor con los nuevos datos
    await existingDriver.update(updatedDriverData);

    res.status(200).json({
      message: "Conductor actualizado con éxito",
      data: existingDriver,
    });
  } catch (error) {
    console.error("Error al actualizar el conductor:", error);
    res.status(500).json({ error: "Error interno del servidor" });
  }
}

module.exports = updateDriver;
