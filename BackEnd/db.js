const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("postgres", "postgres", "minciuna12", {
  host: "localhost",
  dialect: `postgres`,
  port: 5000,
});

module.exports = sequelize;
