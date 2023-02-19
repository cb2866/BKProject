import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  Container,
  Card,
  Row,
  Col,
  Stack,
  Nav,
  Tab,
  Table,
  TabContainer,
} from "react-bootstrap";
import {
  fetchSinglePlayerBasicInfo,
  selectSinglePlayerBasicInfo,
} from "./singlePlayerSlice";
import {
  BarChart,
  Bar,
  Cell,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

const SinglePlayerCharts = ({ id }) => {
  const dispatch = useDispatch();
  const playerData = useSelector(selectSinglePlayerBasicInfo);
  console.log(playerData);
  console.log(id);

  const {
    firstName,
    lastName,
    heightFt,
    heightIn,
    imageUrl,
    position,
    seasonPlayerStats,
    weight,
  } = playerData;
  console.log(playerData.seasonPlayerStats);

  useEffect(() => {
    dispatch(fetchSinglePlayerBasicInfo(id));
  }, [id, dispatch]);

  return (
    <Container fluid>
      {playerData && (
        <Card
          id="modal-player"
          style={{
            backgroundColor: "white",
            width: "100%",
            // minWidth: "20rem",
            marginTop: "1rem",
          }}
          className="mx-auto"
        >
          <Card.Header>
            <Card.Title>
              {" "}
              {firstName} {lastName}
            </Card.Title>
          </Card.Header>
          <Card.Body className="me-auto">
            <Row>
              <Col>
                <img
                  src={imageUrl}
                  style={{ maxWidth: "100%", maxHeight: "90%" }}
                  alt={`${firstName} ${lastName}`}
                />
              </Col>
              {/* </Row> */}
              {/* <Row> */}
              <Tab.Container defaultActiveKey="0">
                <Col sm={8}>
                  <Tab.Content>
                    {seasonPlayerStats?.map((record, idx) => {
                      return (
                        <Tab.Pane
                          key={idx}
                          eventKey={`${idx}`}
                          className="justify-content-start"
                        >
                          <Table>
                            <thead>
                              <tr>
                                <th colSpan={2}>Season Averages</th>
                              </tr>
                            </thead>
                            <tbody className="text-align-left">
                              <tr>
                                <td id="table-header">Minutes Per Game</td>
                                <td id="table-data">{record.minutesPlayed}</td>
                              </tr>
                              <tr>
                                <td id="table-header">Points Per Game</td>
                                <td id="table-data">{record.pointsMade}</td>
                              </tr>
                              <tr>
                                <td id="table-header"> 3PA</td>
                                <td id="table-data">
                                  {record.threePointAttempt}
                                </td>
                              </tr>
                              <tr>
                                <td id="table-header"> 3PM</td>
                                <td id="table-data">
                                  {" "}
                                  {record.threePointMade}
                                </td>
                              </tr>
                              <tr>
                                <td id="table-header"> 3P%</td>
                                <td id="table-data">
                                  {Math.round(record.threePointPercent * 100)}%
                                </td>
                              </tr>
                            </tbody>
                          </Table>
                        </Tab.Pane>
                      );
                    })}
                    {/* <------------------------------graph----------------------------------> */}
                    {/* <Tab.Pane eventKey={{ seasonPlayerStats }.length + 1}>
                      <BarChart
                        width={400}
                        height={300}
                        data={playerData.seasonPlayerStats}
                        margin={{
                          top: 10,
                          right: 30,
                          left: 10,
                          bottom: 2,
                        }}
                      >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="season" />
                        <YAxis />
                        <Bar
                          dataKey="threePointAttempt"
                          stackId="a"
                          fill="black"
                        />
                        <Bar dataKey="threePointMade" stackId="a" fill="gray" />

                        <Tooltip />
                        <Legend />
                      </BarChart>
                    </Tab.Pane> */}
                  </Tab.Content>
                </Col>
                <Col
                  sm={4}
                  className="d-flex align-items-center justify-content-center"
                >
                  <Nav variant="pills" className="flex-column" id="season-tabs">
                    {seasonPlayerStats?.map((record, idx) => {
                      return (
                        <Nav.Item key={idx}>
                          <Nav.Link eventKey={`${idx}`}>
                            {record.season}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                    {/* <Nav.Item>
                      <Nav.Link eventKey={{ seasonPlayerStats }.length + 1}>
                        All
                      </Nav.Link>
                    </Nav.Item> */}
                  </Nav>
                </Col>
              </Tab.Container>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default SinglePlayerCharts;
