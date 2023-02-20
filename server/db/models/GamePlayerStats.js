const { DataTypes } = require("sequelize");
const db = require("../db");

const GamePlayerStat = db.define("gamePlayerStat", {
  season: {
    type: DataTypes.INTEGER,
  },
  playerId: {
    type: DataTypes.INTEGER,
  },
  playerFirstName: {
    type: DataTypes.STRING,
  },
  playerLastName: {
    type: DataTypes.STRING,
  },
  teamName: {
    type: DataTypes.STRING,
  },
  gameId: {
    type: DataTypes.INTEGER,
  },
  gameDate: {
    type: DataTypes.DATEONLY,
  },
  minutesPlayed: {
    type: DataTypes.STRING,
  },
  pointsMade: {
    type: DataTypes.INTEGER,
  },
  threePointMade: {
    type: DataTypes.INTEGER,
  },
  threePointAttempt: {
    type: DataTypes.INTEGER,
  },
  threePointPercent: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

module.exports = GamePlayerStat;
