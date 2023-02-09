// import nba from "nba.js";
const nba = require("nba.js").default;
const {
  db,
  models: { Game },
} = require("../server/db");
const axios = require("axios");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  const response = await axios.get(
    "https://www.balldontlie.io/api/v1/games?seasons%5B%5D=2022&team_ids%5B%5D=3&per_page=100"
  );
  const games = response.data.data;

  const gameSeed = await Promise.all(
    games.map((game) =>
      Game.create({
        date: game.date,
        postseason: game.postseason,
        homeTeam: game.home_team.full_name,
        homeTeamScore: game.home_team_score,
        visitorTeam: game.visitor_team.full_name,
        visitorTeamScore: game.visitor_team_score,
      })
    )
  );

  const wutanabeStats = nba.data
    .playerUberStats({
      year: 2022,

      personId: 1629139,
    })
    .then(function (res) {
      return res;
    })
    .catch(function (err) {
      console.error(err);
    });

  console.log(wutanabeStats);
  console.log(`seeded ${gameSeed.length} games`);
}

async function runSeed() {
  console.log("seeding...");
  try {
    await seed();
  } catch (err) {
    console.error(err);
    process.exitCode = 1;
  } finally {
    await db.close();
    console.log("db connection closed");
  }
}

if (module === require.main) {
  runSeed();
}

module.exports = seed;
