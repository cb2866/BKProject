const db = require("./db");
const AllGame = require("./models/AllGame");
const PlayerStat = require("./models/PlayerStat");

module.exports = {
  db,
  models: { AllGame, PlayerStat },
};
