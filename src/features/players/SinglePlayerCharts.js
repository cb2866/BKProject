import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  VictoryBar,
  VictoryLabel,
  VictoryChart,
  VictoryAxis,
  VictoryStack,
  VictoryTheme,
} from "victory";
import { Container, Card, Row } from "react-bootstrap";
import {
  selectPlayerStats,
  fetchAllPlayerStats,
  fetchAllPlayerBasicInfo,
  selectPlayerBasicInfo,
} from "./allPlayersSlice";

const SinglePlayerCharts = () => {
  const dispatch = useDispatch();
  const playerSeasonStats = useSelector(selectPlayerStats);
  const playersBasicInfo = useSelector(selectPlayerBasicInfo);

  useEffect(() => {
    dispatch(fetchAllPlayerBasicInfo());
    dispatch(fetchAllPlayerStats());
  }, [dispatch]);
  console.log(playersBasicInfo);

  return (
    <Container fluid>
      <h1>Single Player Charts</h1>
      <Card
        style={{ backgroundColor: "inherit", width: "25rem" }}
        className="mx-auto"
      >
        {playersBasicInfo.length && (
          <VictoryChart theme={VictoryTheme.material} domainPadding={10}>
            <VictoryStack>
              <VictoryBar
                labelComponent={<VictoryLabel angle={-45} textAnchor="end" />}
                // animate={{
                //   duration: 2000,
                //   onLoad: { duration: 100 },
                // }}
                style={{ data: { fill: "white" } }}
                data={playersBasicInfo}
                x="firstName"
                y="lastName"
              />
            </VictoryStack>
          </VictoryChart>
        )}
      </Card>
    </Container>
  );
};

export default SinglePlayerCharts;
