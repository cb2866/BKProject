const { DataTypes } = require("sequelize");
const db = require("../db");

const SeasonPlayerStat = db.define("seasonPlayerStat", {
  season: {
    type: DataTypes.STRING,
  },
  playerId: {
    type: DataTypes.INTEGER,
  },
  minutesPlayed: {
    type: DataTypes.STRING,
  },
  pointsMade: {
    type: DataTypes.DECIMAL(10, 2),
  },
  threePointMade: {
    type: DataTypes.DECIMAL(10, 2),
  },
  threePointAttempt: {
    type: DataTypes.DECIMAL(10, 2),
  },
  threePointPercent: {
    type: DataTypes.DECIMAL(10, 2),
  },
});

module.exports = SeasonPlayerStat;
