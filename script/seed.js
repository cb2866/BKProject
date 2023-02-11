// import nba from "nba.js";
const nba = require("nba.js").default;
const {
  db,
  models: { AllGame },
} = require("../server/db");
const axios = require("axios");
const PlayerStat = require("../server/db/models/PlayerStat");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  // creating a record of each Nets game from 2022-23 season

  const response = await axios.get(
    "https://api.sportradar.com/nba/trial/v7/en/games/2022/REG/schedule.json?api_key=gb32978pvtpyam75whhsvpk8"
  );

  const allGames = response.data.games;
  const netsGames = allGames.filter((game) => {
    return (
      game.home.name === "Brooklyn Nets" || game.away.name === "Brooklyn Nets"
    );
  });

  const gameSeed = await Promise.all(
    netsGames.map((game) =>
      AllGame.create({
        gameId: game.id,
        status: game.status,
        date: game.scheduled,
        homeTeam: game.home.name,
        homeTeamScore: game.home_points,
        awayTeam: game.away.name,
        awayTeamScore: game.away_points,
      })
    )
  );

  // creating a record of each player's 3-pointer stats in 2023=2023 season
  const game1 = await axios.get(
    "https://api.sportradar.us/nba/trial/v7/en/games/7a48723e-550e-46c0-8ed5-56828306e276/summary.json?api_key=gb32978pvtpyam75whhsvpk8"
  );
  const game1players = game1.data.home.players;
  const game1seed = await Promise.all(
    game1players.map((player) =>
      PlayerStat.create({
        gameId: game1.data.id,
        gameDate: game1.data.scheduled,
        playerId: player.id,
        playerFullName: player.full_name,
        jerseyNumber: player.jersey_number,
        playerMinutes: player.statistics.minutes,
        threePointMade: player.statistics.three_points_made,
        threePointAttempt: player.statistics.three_points_att,
        threePointPercent: player.statistics.three_points_pct,
      })
    )
  );

  const game2 = await axios.get(
    "https://api.sportradar.us/nba/trial/v7/en/games/136e37c6-5f85-43c6-bd3c-763a84aad05a/summary.json?api_key=gb32978pvtpyam75whhsvpk8"
  );
  const game2players = game2.data.home.players;

  const game2seed = await Promise.all(
    game2players.map((player) =>
      PlayerStat.create({
        gameId: game2.data.id,
        gameDate: game2.data.scheduled,
        playerId: player.id,
        playerFullName: player.full_name,
        jerseyNumber: player.jersey_number,
        playerMinutes: player.statistics.minutes,
        threePointMade: player.statistics.three_points_made,
        threePointAttempt: player.statistics.three_points_att,
        threePointPercent: player.statistics.three_points_pct,
      })
    )
  );

  console.log(
    `seeded ${gameSeed.length} games, ${
      game1seed.length + game2seed.length
    } player stats from games`
  );
  //
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
