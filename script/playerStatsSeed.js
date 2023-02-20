const playerStatsSeed = [
  {
    id: 1,
    season: "2022-2023",
    playerId: 61,
    minutesPlayed: "36:13",
    pointsMade: "17.63",
    threePointMade: "1.85",
    threePointAttempt: "4.66",
    threePointPercent: "0.40",
    playerBasicId: 13,
  },
  {
    id: 2,
    season: "2022-2023",
    playerId: 114,
    minutesPlayed: "22:55",
    pointsMade: "10.35",
    threePointMade: "1.85",
    threePointAttempt: "4.38",
    threePointPercent: "0.42",
    playerBasicId: 12,
  },
  {
    id: 3,
    season: "2022-2023",
    playerId: 130,
    minutesPlayed: "34:10",
    pointsMade: "17.74",
    threePointMade: "2.56",
    threePointAttempt: "6.42",
    threePointPercent: "0.40",
    playerBasicId: 11,
  },
  {
    id: 5,
    season: "2022-2023",
    playerId: 158,
    minutesPlayed: "32:00",
    pointsMade: "8.86",
    threePointMade: "1.84",
    threePointAttempt: "5.27",
    threePointPercent: "0.35",
    playerBasicId: 9,
  },
  {
    id: 4,
    season: "2022-2023",
    playerId: 197,
    minutesPlayed: "23:50",
    pointsMade: "8.57",
    threePointMade: "2.04",
    threePointAttempt: "4.82",
    threePointPercent: "0.42",
    playerBasicId: 8,
  },
  {
    id: 6,
    season: "2022-2023",
    playerId: 319,
    minutesPlayed: "13:18",
    pointsMade: "5.75",
    threePointMade: "1.17",
    threePointAttempt: "3.17",
    threePointPercent: "0.37",
    playerBasicId: 6,
  },
  {
    id: 7,
    season: "2022-2023",
    playerId: 351,
    minutesPlayed: "33:24",
    pointsMade: "9.18",
    threePointMade: "2.24",
    threePointAttempt: "5.55",
    threePointPercent: "0.40",
    playerBasicId: 5,
  },
  {
    id: 11,
    season: "2022-2023",
    playerId: 417,
    minutesPlayed: "26:22",
    pointsMade: "6.93",
    threePointMade: "0.00",
    threePointAttempt: "0.05",
    threePointPercent: "0.00",
    playerBasicId: 3,
  },
  {
    id: 10,
    season: "2022-2023",
    playerId: 432,
    minutesPlayed: "14:31",
    pointsMade: "7.43",
    threePointMade: "0.61",
    threePointAttempt: "1.76",
    threePointPercent: "0.35",
    playerBasicId: 4,
  },
  {
    id: 8,
    season: "2022-2023",
    playerId: 470,
    minutesPlayed: "17:54",
    pointsMade: "6.53",
    threePointMade: "1.21",
    threePointAttempt: "2.51",
    threePointPercent: "0.48",
    playerBasicId: 2,
  },
  {
    id: 9,
    season: "2022-2023",
    playerId: 666679,
    minutesPlayed: "25:51",
    pointsMade: "14.00",
    threePointMade: "2.60",
    threePointAttempt: "6.15",
    threePointPercent: "0.42",
    playerBasicId: 7,
  },

  {
    id: 13,
    season: "2022-2023",
    playerId: 17896048,
    minutesPlayed: "16:30",
    pointsMade: "10.83",
    threePointMade: "0.88",
    threePointAttempt: "2.15",
    threePointPercent: "0.41",
    playerBasicId: 1,
  },

  {
    id: 12,
    season: "2022-2023",
    playerId: 17896049,
    minutesPlayed: "8:48",
    pointsMade: "2.88",
    threePointMade: "0.00",
    threePointAttempt: "0.38",
    threePointPercent: "0.00",
    playerBasicId: 10,
  },

  {
    id: 14,
    season: "2021-2022",
    playerId: 61,
    minutesPlayed: "36:13",
    pointsMade: "17.63",
    threePointMade: "1.39",
    threePointAttempt: "3.75",
    threePointPercent: "0.37",
    playerBasicId: 13,
  },
  {
    id: 15,
    season: "2021-2022",
    playerId: 114,
    minutesPlayed: "33:05",
    pointsMade: "14.98",
    threePointMade: "2.46",
    threePointAttempt: "5.80",
    threePointPercent: "0.42",
    playerBasicId: 12,
  },
  {
    id: 16,
    season: "2021-2022",
    playerId: 130,
    minutesPlayed: "29:25",
    pointsMade: "13.72",
    threePointMade: "1.68",
    threePointAttempt: "4.91",
    threePointPercent: "0.34",

    playerBasicId: 11,
  },
  {
    id: 17,
    season: "2021-2022",
    playerId: 158,
    minutesPlayed: "33:02",
    pointsMade: "11.00",
    threePointMade: "2.15",
    threePointAttempt: "5.44",
    threePointPercent: "0.40",

    playerBasicId: 9,
  },
  {
    id: 18,
    season: "2021-2022",
    playerId: 197,
    minutesPlayed: "29:50",
    pointsMade: "11.29",
    threePointMade: "2.93",
    threePointAttempt: "6.29",
    threePointPercent: "0.47",

    playerBasicId: 8,
  },
  {
    id: 19,
    season: "2021-2022",
    playerId: 319,
    minutesPlayed: "28:57",
    pointsMade: "11.40",
    threePointMade: "2.80",
    threePointAttempt: "7.01",
    threePointPercent: "0.40",

    playerBasicId: 6,
  },
  {
    id: 20,
    season: "2021-2022",
    playerId: 351,
    minutesPlayed: "31:02",
    pointsMade: "7.35",
    threePointMade: "1.53",
    threePointAttempt: "3.96",
    threePointPercent: "0.39",

    playerBasicId: 5,
  },
  {
    id: 21,
    season: "2021-2022",
    playerId: 470,
    minutesPlayed: "11:51",
    pointsMade: "4.44",
    threePointMade: "0.74",
    threePointAttempt: "2.08",
    threePointPercent: "0.36",

    playerBasicId: 2,
  },
  {
    id: 22,
    season: "2021-2022",
    playerId: 666679,
    minutesPlayed: "26:04",
    pointsMade: "12.43",
    threePointMade: "2.51",
    threePointAttempt: "5.88",
    threePointPercent: "0.43",

    playerBasicId: 7,
  },
  {
    id: 23,
    season: "2021-2022",
    playerId: 17896048,
    minutesPlayed: "18:11",
    pointsMade: "9.55",
    threePointMade: "0.79",
    threePointAttempt: "2.80",
    threePointPercent: "0.28",

    playerBasicId: 1,
  },
  {
    id: 24,
    season: "2021-2022",
    playerId: 17896049,
    minutesPlayed: "16:39",
    pointsMade: "5.12",
    threePointMade: "0.38",
    threePointAttempt: "1.77",
    threePointPercent: "0.22",

    playerBasicId: 10,
  },

  {
    id: 25,
    season: "2020-2021",
    playerId: 61,
    minutesPlayed: "32:36",
    pointsMade: "13.47",
    threePointMade: "1.86",
    threePointAttempt: "4.38",
    threePointPercent: "0.43",

    playerBasicId: 13,
  },
  {
    id: 26,
    season: "2020-2021",
    playerId: 114,
    minutesPlayed: "28:44",
    pointsMade: "12.47",
    threePointMade: "2.21",
    threePointAttempt: "4.91",
    threePointPercent: "0.45",

    playerBasicId: 12,
  },
  {
    id: 27,
    season: "2020-2021",
    playerId: 130,
    minutesPlayed: "21:26",
    pointsMade: "6.67",
    threePointMade: "0.67",
    threePointAttempt: "2.33",
    threePointPercent: "0.29",

    playerBasicId: 11,
  },
  {
    id: 28,
    season: "2020-2021",
    playerId: 158,
    minutesPlayed: "32:00",
    pointsMade: "9.83",
    threePointMade: "1.98",
    threePointAttempt: "5.03",
    threePointPercent: "0.39",

    playerBasicId: 9,
  },
  {
    id: 29,
    season: "2020-2021",
    playerId: 197,
    minutesPlayed: "31:01",
    pointsMade: "14.12",
    threePointMade: "3.06",
    threePointAttempt: "6.45",
    threePointPercent: "0.47",

    playerBasicId: 8,
  },
  {
    id: 30,
    season: "2020-2021",
    playerId: 319,
    minutesPlayed: "24:46",
    pointsMade: "10.82",
    threePointMade: "2.37",
    threePointAttempt: "6.31",
    threePointPercent: "0.38",

    playerBasicId: 6,
  },
  {
    id: 31,
    season: "2020-2021",
    playerId: 351,
    minutesPlayed: "31:33",
    pointsMade: "6.99",
    threePointMade: "1.51",
    threePointAttempt: "3.92",
    threePointPercent: "0.39",

    playerBasicId: 5,
  },
  {
    id: 32,
    season: "2020-2021",
    playerId: 417,
    minutesPlayed: "32:21",
    pointsMade: "14.29",
    threePointMade: "0.05",
    threePointAttempt: "0.17",
    threePointPercent: "0.30",

    playerBasicId: 3,
  },
  {
    id: 33,
    season: "2020-2021",
    playerId: 432,
    minutesPlayed: "16:14",
    pointsMade: "7.53",
    threePointMade: "0.66",
    threePointAttempt: "1.66",
    threePointPercent: "0.40",

    playerBasicId: 4,
  },
  {
    id: 34,
    season: "2020-2021",
    playerId: 470,
    minutesPlayed: "14:27",
    pointsMade: "4.36",
    threePointMade: "0.72",
    threePointAttempt: "1.80",
    threePointPercent: "0.40",

    playerBasicId: 2,
  },
  {
    id: 35,
    season: "2020-2021",
    playerId: 666679,
    minutesPlayed: "23:57",
    pointsMade: "9.55",
    threePointMade: "1.95",
    threePointAttempt: "5.58",
    threePointPercent: "0.35",

    playerBasicId: 7,
  },
];

module.exports = { playerStatsSeed };

//<-------------------------- seeding 21-22 season player averages---------------------->
// const season21Response = await axios.get(
//   ` https://www.balldontlie.io/api/v1/season_averages?season=2021&player_ids[]=470&player_ids[]=17896048&player_ids[]=432&player_ids[]=417&player_ids[]=351&player_ids[]=319&player_ids[]=666679&player_ids[]=197&player_ids[]=158&player_ids[]=17896049&player_ids[]=130&player_ids[]=114&player_ids[]=61`
// );
// const season21ResponseStat = season21Response.data.data;

// const season21PlayerStatSeed = await Promise.all(
//   season21ResponseStat.map((player) =>
//     SeasonPlayerStat.create({
//       season: "2021-2022",
//       playerId: player.player_id,
//       minutesPlayed: player.min,
//       pointsMade: player.pts,
//       threePointMade: player.fg3m,
//       threePointAttempt: player.fg3a,
//       threePointPercent: player.fg3_pct,
//     })
//   )
// );

//<-------------------------seeding 20-21 season player averages----------------------->
// const season20Response = await axios.get(
//   ` https://www.balldontlie.io/api/v1/season_averages?season=2020&player_ids[]=470&player_ids[]=17896048&player_ids[]=432&player_ids[]=417&player_ids[]=351&player_ids[]=319&player_ids[]=666679&player_ids[]=197&player_ids[]=158&player_ids[]=17896049&player_ids[]=130&player_ids[]=114&player_ids[]=61`
// );
// const season20ResponseStat = season20Response.data.data;

// const season20PlayerStatSeed = await Promise.all(
//   season20ResponseStat.map((player) =>
//     SeasonPlayerStat.create({
//       season: "2020-2021",
//       playerId: player.player_id,
//       minutesPlayed: player.min,
//       pointsMade: player.pts,
//       threePointMade: player.fg3m,
//       threePointAttempt: player.fg3a,
//       threePointPercent: player.fg3_pct,
//     })
//   )
// );

// const season22Response = await axios.get(
//   `https://www.balldontlie.io/api/v1/season_averages?season=2022&player_ids[]=470&player_ids[]=17896048&player_ids[]=432&player_ids[]=17553942&player_ids[]=417&player_ids[]=351&player_ids[]=319&player_ids[]=666679&player_ids[]=197&player_ids[]=158&player_ids[]=17896049&player_ids[]=130&player_ids[]=114&player_ids[]=61`
// );
// const season22ResponseStat = season22Response.data.data;

// const season22PlayerStatSeed = await Promise.all(
//   season22ResponseStat.map((player) =>
//     SeasonPlayerStat.create({
//       season: "2022-2023",
//       playerId: player.player_id,
//       minutesPlayed: player.min,
//       pointsMade: player.pts,
//       threePointMade: player.fg3m,
//       threePointAttempt: player.fg3a,
//       threePointPercent: player.fg3_pct,
//     })
//   )
// );
