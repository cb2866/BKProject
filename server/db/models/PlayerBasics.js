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
  heightFt: {
    type: DataTypes.INTEGER,
  },
  heightIn: {
    type: DataTypes.INTEGER,
  },
  weight: {
    type: DataTypes.INTEGER,
  },
  imageUrl: {
    type: DataTypes.STRING,
  },
});

module.exports = PlayerBasic;
