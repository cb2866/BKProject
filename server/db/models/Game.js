const { DataTypes } = require("sequelize");
const db = require("../db");

const Game = db.define("game", {
  date: {
    type: DataTypes.DATE,
  },
  postseason: {
    type: DataTypes.BOOLEAN,
  },
  homeTeam: {
    type: DataTypes.STRING,
  },
  homeTeamScore: {
    type: DataTypes.INTEGER,
  },
  visitorTeam: {
    type: DataTypes.STRING,
  },
  visitorTeamScore: {
    type: DataTypes.INTEGER,
  },
});

module.exports = Game;
