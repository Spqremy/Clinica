const Sequelize = require("sequelize");
const db = require("../db");

const user = db.define("users", {
  email: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  token: {
    type: Sequelize.STRING(5000),
  },
});
user.sync({ alter: true });

module.exports = user;
