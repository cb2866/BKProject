const router = require("express").Router();
const {
  models: { SeasonPlayerStat },
} = require("../db");
const { Op } = require("sequelize");
const PlayerBasic = require("../db/models/PlayerBasics");

//GET all player stats
router.get("/", async (req, res, next) => {
  try {
    const players = await SeasonPlayerStat.findAll({ include: [PlayerBasic] });
    if (players) {
      res.json(players);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//GET single player stats
// look into changing to req.body later on?
router.get("/:id", async (req, res, next) => {
  try {
    const player = await SeasonPlayerStat.findByPk(req.params.id);
    if (player) {
      res.json(player);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
