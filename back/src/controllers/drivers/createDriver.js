const { Driver, Team } = require("../../db");

async function createDriver(req, res) {
  try {
    const {
      nombre,
      apellido,
      imagen,
      nacionalidad,
      descripcion,
      fechaNacimiento,
      teamIds,
    } = req.body;
    // Validar que se proporcionen los campos requeridos
    if (
      !nombre ||
      !apellido ||
      !imagen ||
      !nacionalidad ||
      !descripcion ||
      !fechaNacimiento
    ) {
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

    if (teamIds && teamIds.length > 0) {
      await newDriver.addTeams(teamIds);
    }

    res.status(201).json(newDriver.toJSON());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createDriver;
