const db = require("./db");
const AllGame = require("./models/AllGame");
const PlayerBasic = require("./models/PlayerBasics");
const SeasonPlayerStat = require("./models/SeasonPlayerStats");

SeasonPlayerStat.belongsTo(PlayerBasic);
// PlayerBasic.belongsTo(SeasonPlayerStat);

module.exports = {
  db,
  models: { AllGame, SeasonPlayerStat, PlayerBasic },
};
