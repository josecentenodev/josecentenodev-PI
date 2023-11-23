const { Team } = require("../../db");

async function createTeam(req, res) {
  try {
    const { nombre } = req.body;
    // Validar que se proporcionen los campos requeridos
    if (!nombre) {
      return res.status(400).json({ message: "All fields are mandatory." });
    }
    const newDriver = await Team.create({
      nombre
    });

    res.status(201).json(newDriver.toJSON());
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = createTeam;
