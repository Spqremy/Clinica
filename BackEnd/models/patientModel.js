const Sequelize = require("sequelize");
const db = require("../db");
const user = require("../models/userModel");
const patient = db.define("patients", {
  firstname: {
    type: Sequelize.STRING,
    allowNull: false,
    unique: true,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  sex: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  age: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  lastname: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  consultationdate: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  city: {
    type: Sequelize.STRING,
    allowNull: false,
  },
  phone: {
    type: Sequelize.INTEGER,
    allowNull: false,
  },
  userId: {
    type: Sequelize.INTEGER,
    references: {
      model: user,
      key: "id",
    },
  },
});
user.sync({ alter: true });

module.exports = patient;
