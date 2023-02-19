import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Card, Row, Col, Nav, Tab, Table } from "react-bootstrap";
import {
  fetchSinglePlayerBasicInfo,
  selectSinglePlayerBasicInfo,
} from "./singlePlayerSlice";

const SinglePlayerCharts = ({ id }) => {
  const dispatch = useDispatch();
  const playerData = useSelector(selectSinglePlayerBasicInfo);

  const { firstName, lastName, imageUrl, seasonPlayerStats } = playerData;
  console.log(playerData.seasonPlayerStats);

  useEffect(() => {
    dispatch(fetchSinglePlayerBasicInfo(id));
  }, [id, dispatch]);

  return (
    <Container fluid>
      {playerData && (
        <Card id="modal-player" className="mx-auto">
          {/* <Card.Header>
            <Card.Title>
              {firstName} {lastName}
            </Card.Title>
          </Card.Header> */}
          <Card.Body className="me-auto">
            <Row>
              <Col>
                <img
                  src={imageUrl}
                  style={{ maxWidth: "100%", maxHeight: "90%" }}
                  alt={`${firstName} ${lastName}`}
                />
              </Col>

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
