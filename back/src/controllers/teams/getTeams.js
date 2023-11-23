const { getTeamsFromDB } = require("../../services/getTeamsService");

async function getTeams(req, res) {
  try {
    const teams = await getTeamsFromDB();
    res.status(200).json(teams);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
}

module.exports = getTeams;
