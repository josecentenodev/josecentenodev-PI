require("dotenv").config();
const { DB_USER, DB_PASSWORD, DB_HOST, DB_NAME } = process.env;
const { Sequelize } = require("sequelize");
// TODO: IMPORTAR CONTROLADORES


const sequelize = new Sequelize(
  `postgres://${DB_USER}:${DB_PASSWORD}@${DB_HOST}/${DB_NAME}`,
  { logging: false }
);

// TODO: INSTANCIAR LOS CONTROLADORES Y EXTRAERLOS DEL MODELO
// UserModel(sequelize);
// FavoriteModel(sequelize);

// const { User, Favorite } = sequelize.models;

// TODO: HACER LAS RELACIONES
// User.belongsToMany(Favorite, { through: "user_favorite" });
// Favorite.belongsToMany(User, { through: "user_favorite" });

module.exports = {
    //TODO: EXPORTARLOS 
//   User,
//   Favorite,
  conn: sequelize,
};
