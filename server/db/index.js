const db = require("./db");
const AllGame = require("./models/AllGame");
const PlayerBasic = require("./models/PlayerBasics");
const SeasonPlayerStat = require("./models/SeasonPlayerStats");

PlayerBasic.hasMany(SeasonPlayerStat, { foreignKey: "playerBasicId" });
SeasonPlayerStat.belongsTo(PlayerBasic);

module.exports = {
  db,
  models: { AllGame, SeasonPlayerStat, PlayerBasic },
};
