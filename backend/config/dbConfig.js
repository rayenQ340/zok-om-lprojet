let mysql = require("mysql2");

const { Sequelize } = require("sequelize");

const sequelize = new Sequelize("Farm_Labs", "root", "rootroot", {
  host: "localhost",
  dialect: "mysql",
});

module.exports = sequelize;
