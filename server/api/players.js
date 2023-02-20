const router = require("express").Router();
const {
  models: { PlayerBasic },
} = require("../db");
const SeasonPlayerStat = require("../db/models/SeasonPlayerStats");

// GET all player basics
router.get("/", async (req, res, next) => {
  try {
    const players = await PlayerBasic.findAll({
      include: [SeasonPlayerStat],
    });
    if (players) {
      res.json(players);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

// GET single player basics
router.get("/:id", async (req, res, next) => {
  try {
    const player = await PlayerBasic.findByPk(req.params.id, {
      include: [SeasonPlayerStat],
    });
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
