const router = require("express").Router();
module.exports = router;

router.use("/games", require("./games"));
router.use("/gamePlayerStats", require("./gamePlayerStats"));
router.use("/players", require("./players"));
router.use("/playerStats", require("./playerStats"));

router.use((req, res, next) => {
  const error = new Error("Not Found");
  error.status = 404;
  next(error);
});
