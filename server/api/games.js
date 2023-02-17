const router = require("express").Router();
const {
  models: { AllGame },
} = require("../db");
const { Op } = require("sequelize");

//GET all games
router.get("/", async (req, res, next) => {
  try {
    const games = await AllGame.findAll();
    if (games) {
      res.json(games);
    } else {
      res.sendStatus(404);
    }
  } catch (err) {
    next(err);
  }
});

module.exports = router;
