const { Driver } = require('../../db');

async function deleteDriver(req, res) {
  try {
    const { id } = req.params;

    // Buscar el conductor por ID
    const driverToDelete = await Driver.findByPk(id);

    // Verificar si el conductor existe
    if (!driverToDelete) {
      return res.status(404).json({ message: 'Conductor no encontrado' });
    }

    // Eliminar el conductor
    await driverToDelete.destroy();

    res.status(200).json({ message: 'Conductor eliminado correctamente' });
  } catch (error) {
    console.error(error.message);
    res.status(500).json({ message: 'Error interno del servidor' });
  }
}

module.exports = deleteDriver;
