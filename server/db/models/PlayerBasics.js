const { DataTypes } = require("sequelize");
const db = require("../db");

const PlayerBasic = db.define("playerBasic", {
  playerId: {
    type: DataTypes.INTEGER,
  },
  firstName: {
    type: DataTypes.STRING,
  },
  lastName: {
    type: DataTypes.STRING,
  },
  position: {
    type: DataTypes.STRING,
  },
  // jerseyNumber: {
  //   type: DataTypes.STRING,
  // },
});

module.exports = PlayerBasic;
