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

//GET all games that have already taken place
router.get("/played", async (req, res, next) => {
  try {
    const games = await AllGame.findAll({
      where: {
        status: "closed",
      },
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
module.exports = router;
