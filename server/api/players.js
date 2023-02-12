const router = require("express").Router();
const {
  models: { PlayerStat },
} = require("../db");
const { Op } = require("sequelize");

// GET all player stats
router.get("/", async (req, res, next) => {
  try {
    const players = await PlayerStat.findAll();
    if (players) {
      res.json(players);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

// GET single player stats
router.get("/:playerId", async (req, res, next) => {
  try {
    const player = await PlayerStat.findByPk(req.params.id);
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
