const { Driver } = require("../../db");
const { v4: uuidv4 } = require("uuid");

async function createDriver(req, res) {
  try {
    const { nombre, apellido, imagen, nacionalidad, descripcion, fechaNacimiento } = req.body;
    // Validar que se proporcionen los campos requeridos
    if (!nombre || !apellido || !imagen || !nacionalidad || !descripcion || !fechaNacimiento) {
      return res.status(400).json({ message: "All fields are mandatory." });
    }
    const newDriver = await Driver.create({
      nombre,
      apellido,
      imagen,
      nacionalidad,
      descripcion,
      fechaNacimiento,
    });

    res.status(201).json(newDriver.toJSON());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createDriver;
