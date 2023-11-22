const axios = require("axios");
const { Team } = require("../db");

async function seedTeamsFromAPI() {
  const apiResponse = await axios.get("http://localhost:5000/drivers");
  const drivers = apiResponse.data;

  for (const driver of drivers) {
    if (driver.teams) {
      const teamNames = driver.teams.split(",").map((name) => name.trim());
      for (const teamName of teamNames) {
        const [team, created] = await Team.findOrCreate({
          where: { nombre: teamName },
        });
      }
    }
  }
}

async function getTeamsFromDB() {
  const teams = await Team.findAll();

  return teams.length > 0 ? teams : [];
}

module.exports = { seedTeamsFromAPI, getTeamsFromDB };
