import React, { useEffect } from "react";
import { Col, Container, Row } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import PendingGames from "./PendingGames";
import CompletedGames from "./CompletedGames";
import { fetchAllGames, selectGames } from "./gamesSlice";

const AllGames = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);

  const games = useSelector(selectGames);
  const completedGames = games.filter((game) => {
    return game.status === "Final";
  });

  const pendingGames = games.filter((game) => {
    return game.status !== "Final";
  });
  // const homeGames = completedGames.filter((game) => {
  //   return game.homeTeam === "Brooklyn Nets";
  // });
  // const awayGames = completedGames.filter((game) => {
  //   return game.awayTeam === "Brooklyn Nets";
  // });

  return (
    <Container fluid style={{ backgroundColor: "white" }}>
      <h1>2022-2023</h1>

      <Row className="mx-auto">
        {/* <Col xs={6}>
          <h4>Remaining Games for the Season</h4>
          <PendingGames pendingGames={pendingGames} />
        </Col>{" "} */}
        {/* <---------------------------- nets home games -------------------------> */}
        <Col>
          <h4>Previous Games Performance</h4>
          <CompletedGames completedGames={completedGames} />
          {/* <ResponsiveContainer maxWidth={700} maxHeight="50%"> */}
          {/* <LineChart
            className="mx-auto"
            backgroundColor="white"
            width={500}
            height={300}
            data={homeGames}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="homeTeamScore"
              stroke="#8884d8"
              //   dot={<customDot />}
            />
            <Line type="monotone" dataKey="awayTeamScore" stroke="#82ca9d" />
          </LineChart>

          {/* <---------------------------- nets away games -------------------------> */}
          {/* <ResponsiveContainer maxWidth={700} maxHeight="50%"> */}
          {/* <LineChart
            className="mx-auto"
            backgroundColor="white"
            width={500}
            height={300}
            data={awayGames}
            margin={{
              top: 5,
              right: 30,
              left: 20,
              bottom: 5,
            }}
          >
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Legend />
            <Line
              type="monotone"
              dataKey="homeTeamScore"
              stroke="#8884d8"
              //   dot={<customDot />}
            />
            <Line type="monotone" dataKey="awayTeamScore" stroke="#82ca9d" />
          </LineChart> */}{" "}
          {/* </ResponsiveContainer> */}
        </Col>
      </Row>
    </Container>
  );
};

export default AllGames;
