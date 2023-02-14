const {
  db,
  models: { AllGame, SeasonPlayerStat, PlayerBasic },
} = require("../server/db");
const axios = require("axios");

async function seed() {
  await db.sync({ force: true });
  console.log("db synced!");

  // <-------- creating a record of each Nets game from 2022-23 season------->
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

  // <-----------seeding indiv player stats ------------->
  //Wutanabe
  const wutanabeResponse = await axios.get(
    "https://www.balldontlie.io/api/v1/players/470"
  );
  const wutanabeGenStats = wutanabeResponse.data;

  //Thomas
  const thomasResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/17896048`
  );
  const thomasGenStats = thomasResponse.data;

  //Sumner
  const sumnerResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/432`
  );
  const sumnerGenStats = sumnerResponse.data;

  //Smith
  // const smithResponse = await axios.get(
  //   `https://www.balldontlie.io/api/v1/players/17553942`
  // );
  // const smithGenStats = smithResponse.data;

  //Simmons
  const simmonsResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/417`
  );
  const simmonsGenStats = simmonsResponse.data;

  //O'Neale
  const onealeResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/351`
  );
  const onealeGenStats = onealeResponse.data;

  //Mills
  const millsResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/319`
  );
  const millsGenStats = millsResponse.data;

  //Johnson
  const johnsonResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/666679`
  );
  const johnsonGenStats = johnsonResponse.data;

  //Harris
  const harrisResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/197`
  );
  const harrisGenStats = harrisResponse.data;

  //Finney-Smith
  const finneySmithResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/158`
  );
  const finneySmithGenStats = finneySmithResponse.data;

  //Duke Jr.
  const dukeResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/17896049`
  );
  const dukeGenStats = dukeResponse.data;

  //Dinwiddie
  const dinwiddieResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/130`
  );
  const dinwiddieGenStats = dinwiddieResponse.data;

  //Curry
  const curryResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/114`
  );
  const curryGenStats = curryResponse.data;

  //Bridges
  const bridgesResponse = await axios.get(
    `https://www.balldontlie.io/api/v1/players/61`
  );
  const bridgesGenStats = bridgesResponse.data;

  //Seed file
  const playerGenStatsArray = [
    wutanabeGenStats,
    thomasGenStats,
    sumnerGenStats,
    // smithGenStats,
    simmonsGenStats,
    onealeGenStats,
    millsGenStats,
    johnsonGenStats,
    harrisGenStats,
    finneySmithGenStats,
    dukeGenStats,
    dinwiddieGenStats,
    curryGenStats,
    bridgesGenStats,
  ];
  const playerGenStatsSeed = await Promise.all(
    playerGenStatsArray.map((player) =>
      PlayerBasic.create({
        playerId: player.id,
        firstName: player.first_name,
        lastName: player.last_name,
        position: player.position,
        heightFt: player.height_feet,
        heightIn: player.height_inches,
        weight: player.weight_pounds,
      })
    )
  );

  //seeding 22-23 season player averages
  const season22Response = await axios.get(
    `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=470&player_ids[]=17896048&player_ids[]=432&player_ids[]=17553942&player_ids[]=417&player_ids[]=351&player_ids[]=319&player_ids[]=666679&player_ids[]=197&player_ids[]=158&player_ids[]=17896049&player_ids[]=130&player_ids[]=114&player_ids[]=61`
  );
  const season22ResponseStat = season22Response.data.data;

  const season22PlayerStatSeed = await Promise.all(
    season22ResponseStat.map((player) =>
      SeasonPlayerStat.create({
        season: "2022-2023",
        playerId: player.player_id,
        minutesPlayed: player.min,
        pointsMade: player.pts,
        threePointMade: player.fg3m,
        threePointAttempt: player.fg3a,
        threePointPercent: player.fg3_pct,
      })
    )
  );

  //seeding 21-22 season player averages
  const season21Response = await axios.get(
    ` https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=470&player_ids[]=17896048&player_ids[]=432&player_ids[]=417&player_ids[]=351&player_ids[]=319&player_ids[]=666679&player_ids[]=197&player_ids[]=158&player_ids[]=17896049&player_ids[]=130&player_ids[]=114&player_ids[]=61`
  );
  const season21ResponseStat = season21Response.data.data;

  const season21PlayerStatSeed = await Promise.all(
    season21ResponseStat.map((player) =>
      SeasonPlayerStat.create({
        season: "2021-2022",
        playerId: player.player_id,
        minutesPlayed: player.min,
        pointsMade: player.pts,
        threePointMade: player.fg3m,
        threePointAttempt: player.fg3a,
        threePointPercent: player.fg3_pct,
      })
    )
  );

  //seeding 20-21 season player averages
  const season20Response = await axios.get(
    ` https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=470&player_ids[]=17896048&player_ids[]=432&player_ids[]=417&player_ids[]=351&player_ids[]=319&player_ids[]=666679&player_ids[]=197&player_ids[]=158&player_ids[]=17896049&player_ids[]=130&player_ids[]=114&player_ids[]=61`
  );
  const season20ResponseStat = season20Response.data.data;

  const season20PlayerStatSeed = await Promise.all(
    season20ResponseStat.map((player) =>
      SeasonPlayerStat.create({
        season: "2020-2021",
        playerId: player.player_id,
        minutesPlayed: player.min,
        pointsMade: player.pts,
        threePointMade: player.fg3m,
        threePointAttempt: player.fg3a,
        threePointPercent: player.fg3_pct,
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
