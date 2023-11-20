require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
const DriverModel = require("../models/Driver");
const TeamModel = require("../models/Team");

const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);

DriverModel(sequelize);
TeamModel(sequelize);

const { Driver, Team } = sequelize.models;

Driver.belongsToMany(Team, { through: "driver_team" });
Team.belongsToMany(Driver, { through: "driver_team" });

module.exports = {
  Driver,
  Team,
  conn: sequelize,
};
