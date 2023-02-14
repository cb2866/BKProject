const db = require("./db");
const AllGame = require("./models/AllGame");
const PlayerBasic = require("./models/PlayerBasics");
const SeasonPlayerStat = require("./models/SeasonPlayerStats");

// PlayerBasic.hasMany(SeasonPlayerStat, {
//   as: "playerBasic",
//   foreignKey: "playerBasicId",
// });
// SeasonPlayerStat.belongsTo(PlayerBasic, {
//   foreignKey: "playerBasicId",
//   as: "playerBasicStats",
// });
// PlayerBasic.belongsTo(SeasonPlayerStat);

module.exports = {
  db,
  models: { AllGame, SeasonPlayerStat, PlayerBasic },
};
