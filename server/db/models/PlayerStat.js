const { DataTypes } = require("sequelize");
const db = require("../db");

const PlayerStat = db.define("playerStat", {
  gameId: {
    type: DataTypes.STRING,
  },
  gameDate: {
    type: DataTypes.DATE,
  },
  playerId: {
    type: DataTypes.STRING,
  },
  playerFullName: {
    type: DataTypes.STRING,
  },
  jerseyNumber: {
    type: DataTypes.STRING,
  },
  playerMinutes: {
    type: DataTypes.STRING,
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

module.exports = PlayerStat;
