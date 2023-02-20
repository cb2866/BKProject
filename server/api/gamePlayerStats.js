const router = require("express").Router();
const {
  models: { GamePlayerStat },
} = require("../db");

router.get("/", async (req, res, next) => {
  try {
    const gameDetails = await GamePlayerStat.findAll();
    if (gameDetails) {
      res.json(gameDetails);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

router.get("/:gameId", async (req, res, next) => {
  try {
    const gameDetails = await GamePlayerStat.findAll({
      where: {
        gameId: req.params.gameId,
      },
    });
    if (gameDetails) {
      res.json(gameDetails);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
