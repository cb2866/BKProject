const router = require("express").Router();
const {
  models: { AllGame },
} = require("../db");

//GET all games
router.get("/", async (req, res, next) => {
  try {
    const games = await AllGame.findAll({
      order: ["date"],
    });
    if (games) {
      res.json(games);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

//GET single game
router.get("/:gameId", async (req, res, next) => {
  try {
    const game = await AllGame.findOne({
      where: {
        gameId: req.params.gameId,
      },
    });
    if (game) {
      res.json(game);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
