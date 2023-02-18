const playerBasicSeed = [
  {
    id: 2,
    playerId: 470,
    firstName: "Yuta",
    lastName: "Watanabe",
    position: "G",
    heightFt: 6,
    heightIn: 9,
    weight: 205,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1629139.png?imwidth=1040&imheight=760`,
  },
  {
    id: 1,
    playerId: 17896048,
    firstName: "Cam",
    lastName: "Thomas",
    position: "G",
    heightFt: 6,
    heightIn: 3,
    weight: 210,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1630560.png`,
  },
  {
    id: 4,
    playerId: 432,
    firstName: "Edmond",
    lastName: "Sumner",
    position: "G",
    heightFt: 6,
    heightIn: 6,
    weight: 176,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1628410.png`,
  },
  {
    id: 3,
    playerId: 417,
    firstName: "Ben",
    lastName: "Simmons",
    position: "G-F",
    heightFt: 6,
    heightIn: 10,
    weight: 230,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1627732.png`,
  },
  {
    id: 5,
    playerId: 351,
    firstName: "Royce",
    lastName: "O'Neale",
    position: "F",
    heightFt: 6,
    heightIn: 6,
    weight: 226,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1626220.png`,
  },
  {
    id: 6,
    playerId: 319,
    firstName: "Patty",
    lastName: "Mills",
    position: "G",
    heightFt: 6,
    heightIn: 0,
    weight: 180,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/201988.png`,
  },
  {
    id: 7,
    playerId: 666679,
    firstName: "Cameron",
    lastName: "Johnson",
    position: "F",
    heightFt: 6,
    heightIn: 8,
    weight: 210,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1629661.png`,
  },
  {
    id: 8,
    playerId: 197,
    firstName: "Joe",
    lastName: "Harris",
    position: "F-G",
    heightFt: 6,
    heightIn: 6,
    weight: 218,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/203925.png`,
  },
  {
    id: 9,
    playerId: 158,
    firstName: "Dorian",
    lastName: "Finney-Smith",
    position: "F",
    heightFt: 6,
    heightIn: 8,
    weight: 220,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1627827.png`,
  },
  {
    id: 10,
    playerId: 17896049,
    firstName: "David",
    lastName: "Duke Jr.",
    position: "G",
    heightFt: 6,
    heightIn: 4,
    weight: 204,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1630561.png`,
  },
  {
    id: 11,
    playerId: 130,
    firstName: "Spencer",
    lastName: "Dinwiddie",
    position: "G",
    heightFt: 6,
    heightIn: 6,
    weight: 210,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/203915.png`,
  },
  {
    id: 12,
    playerId: 114,
    firstName: "Seth",
    lastName: "Curry",
    position: "G",
    heightFt: 6,
    heightIn: 2,
    weight: 185,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/203552.png`,
  },
  {
    id: 13,
    playerId: 61,
    firstName: "Mikal",
    lastName: "Bridges",
    position: "F",
    heightFt: 6,
    heightIn: 7,
    weight: 210,
    imageUrl: `https://cdn.nba.com/headshots/nba/latest/1040x760/1628969.png`,
  },
];

module.exports = { playerBasicSeed };

// const playerDetails = await Promise.all(
//   seasonPlayerSeed.map((player) => SeasonPlayerStat.create(player))
// );
// <-----------seeding indiv player stats ------------->
//Wutanabe
// const wutanabeResponse = await axios.get(
//   "https://www.balldontlie.io/api/v1/players/470"
// );
// const wutanabeGenStats = wutanabeResponse.data;

// //Thomas
// const thomasResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/17896048`
// );
// const thomasGenStats = thomasResponse.data;

// //Sumner
// const sumnerResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/432`
// );
// const sumnerGenStats = sumnerResponse.data;

// //Smith
// // const smithResponse = await axios.get(
// //   `https://www.balldontlie.io/api/v1/players/17553942`
// // );
// // const smithGenStats = smithResponse.data;

// //Simmons
// const simmonsResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/417`
// );
// const simmonsGenStats = simmonsResponse.data;

// //O'Neale
// const onealeResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/351`
// );
// const onealeGenStats = onealeResponse.data;

// //Mills
// const millsResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/319`
// );
// const millsGenStats = millsResponse.data;

// //Johnson
// const johnsonResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/666679`
// );
// const johnsonGenStats = johnsonResponse.data;

// //Harris
// const harrisResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/197`
// );
// const harrisGenStats = harrisResponse.data;

// //Finney-Smith
// const finneySmithResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/158`
// );
// const finneySmithGenStats = finneySmithResponse.data;

// //Duke Jr.
// const dukeResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/17896049`
// );
// const dukeGenStats = dukeResponse.data;

// //Dinwiddie
// const dinwiddieResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/130`
// );
// const dinwiddieGenStats = dinwiddieResponse.data;

// //Curry
// const curryResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/114`
// );
// const curryGenStats = curryResponse.data;

// //Bridges
// const bridgesResponse = await axios.get(
//   `https://www.balldontlie.io/api/v1/players/61`
// );
// const bridgesGenStats = bridgesResponse.data;

// //Seed file
// const playerGenStatsArray = [
//   wutanabeGenStats,
//   thomasGenStats,
//   sumnerGenStats,
//   // smithGenStats,
//   simmonsGenStats,
//   onealeGenStats,
//   millsGenStats,
//   johnsonGenStats,
//   harrisGenStats,
//   finneySmithGenStats,
//   dukeGenStats,
//   dinwiddieGenStats,
//   curryGenStats,
//   bridgesGenStats,
// ];
// const playerGenStatsSeed = await Promise.all(
//   playerGenStatsArray.map((player) =>
//     PlayerBasic.create({
//       playerId: player.id,
//       firstName: player.first_name,
//       lastName: player.last_name,
//       position: player.position,
//       heightFt: player.height_feet,
//       heightIn: player.height_inches,
//       weight: player.weight_pounds,
//     })
//   )
// );
