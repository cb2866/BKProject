const {
  db,
  models: { AllGame, SeasonPlayerStat, PlayerBasic, GamePlayerStat },
} = require("../server/db");
const axios = require("axios");
const { playerStatsSeed } = require("./playerStatsSeed");
const { playerBasicSeed } = require("./playerBasicSeed");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  // <--------------- creating a record of each Nets game from 2022-23 season------------------->

  const response = await axios.get(
    "https://www.balldontlie.io/api/v1/games?seasons%5B%5D=2022&team_ids%5B%5D=3&per_page=100"
  );

  const allGames = response.data.data;

  const gameSeed = await Promise.all(
    allGames.map((game) =>
      AllGame.create({
        gameId: game.id,
        status: game.status,
        date: game.date,
        homeTeam: game.home_team.full_name,
        homeTeamScore: game.home_team_score,
        awayTeam: game.visitor_team.full_name,
        awayTeamScore: game.visitor_team_score,
      })
    )
  );

  SeasonPlayerStat.bulkCreate(playerStatsSeed);

  PlayerBasic.bulkCreate(playerBasicSeed);

  // <--------------------pulling in game stats for 2022-2023 season, specific players -------------->

  const gameResponse1 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100" // "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&season[]=2021&seasons[]=2020"
  );

  const gameResponseData1 = gameResponse1.data.data;

  const gamePlayerStatSeed1 = await Promise.all(
    gameResponseData1.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );

  const gameResponse2 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100&page=2"
  );
  const gameResponseData2 = gameResponse2.data.data;
  const gamePlayerStateSeed2 = await Promise.all(
    gameResponseData2.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );
  const gameResponse3 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100&page=3"
  );
  const gameResponseData3 = gameResponse3.data.data;
  const gamePlayerStateSeed3 = await Promise.all(
    gameResponseData3.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );
  const gameResponse4 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100&page=4"
  );
  const gameResponseData4 = gameResponse4.data.data;
  const gamePlayerStateSeed4 = await Promise.all(
    gameResponseData4.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );
  const gameResponse5 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100&page=5"
  );
  const gameResponseData5 = gameResponse5.data.data;
  const gamePlayerStateSeed5 = await Promise.all(
    gameResponseData5.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );
  const gameResponse6 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100&page=6"
  );
  const gameResponseData6 = gameResponse6.data.data;
  const gamePlayerStateSeed6 = await Promise.all(
    gameResponseData6.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );
  const gameResponse7 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100&page=7"
  );
  const gameResponseData7 = gameResponse7.data.data;
  const gamePlayerStateSeed7 = await Promise.all(
    gameResponseData7.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );
  const gameResponse8 = await axios.get(
    "https://www.balldontlie.io/api/v1/stats?seasons[]=2022&player_ids[]=61&player_ids[]=114&player_ids[]=130&player_ids[]=17896049&player_ids[]=158&player_ids[]=197&player_ids[]=666679&player_ids[]=319&player_ids[]=351&player_ids[]=417&player_ids[]=17553942&player_ids[]=432&player_ids[]=17896048&player_ids[]=470&per_page=100&page=8"
  );
  const gameResponseData8 = gameResponse8.data.data;
  const gamePlayerStateSeed8 = await Promise.all(
    gameResponseData8.map((game) =>
      GamePlayerStat.create({
        season: game.game.season,
        playerId: game.player.id,
        playerFirstName: game.player.first_name,
        playerLastName: game.player.last_name,
        teamName: game.team.full_name,
        gameId: game.game.id,
        gameDate: game.game.date,
        minutesPlayed: game.min,
        pointsMade: game.pts,
        threePointMade: game.fg3m,
        threePointAttempt: game.fg3a,
        threePointPercent: game.fg_pct,
      })
    )
  );
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
