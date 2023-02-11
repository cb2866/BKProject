const { DataTypes } = require("sequelize");
const db = require("../db");

const AllGame = db.define("allGame", {
  gameId: {
    type: DataTypes.STRING,
  },
  status: {
    type: DataTypes.STRING,
  },
  date: {
    type: DataTypes.DATE,
  },
  homeTeam: {
    type: DataTypes.STRING,
  },
  homeTeamScore: {
    type: DataTypes.INTEGER,
  },
  awayTeam: {
    type: DataTypes.STRING,
  },
  awayTeamScore: {
    type: DataTypes.INTEGER,
  },
});

module.exports = AllGame;
