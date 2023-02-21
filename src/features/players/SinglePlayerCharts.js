import React, { useEffect } from "react";
import { Card, Col, Container, Nav, Row, Tab, Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import LoadingScreen from "../loading/LoadingScreen";
import {
  fetchSinglePlayerBasicInfo,
  selectSinglePlayerBasicInfo,
} from "./singlePlayerSlice";

const SinglePlayerCharts = ({ id }) => {
  const dispatch = useDispatch();
  const playerData = useSelector(selectSinglePlayerBasicInfo);
  const loading = useSelector((state) => state.singlePlayer.loading);
  const { firstName, lastName, imageUrl, seasonPlayerStats } = playerData;

  const sortedSeasons =
    seasonPlayerStats &&
    [...seasonPlayerStats]?.sort((a, b) => {
      return parseInt(b.season) - parseInt(a.season);
    });

  useEffect(() => {
    dispatch(fetchSinglePlayerBasicInfo(id));
  }, [id, dispatch]);

  return (
    <Container fluid>
      {loading && <LoadingScreen />}
      {playerData && (
        <Card id="modal-player" className="mx-auto">
          <Card.Body className="mx-auto">
            <Row className="mx-auto">
              <Col md={6}>
                <div className="d-flex justify-content-center align-items-center">
                  <img
                    src={imageUrl}
                    style={{ maxWidth: "100%" }}
                    alt={`${firstName} ${lastName}`}
                  />
                </div>
              </Col>

              <Tab.Container defaultActiveKey="0">
                <Col sm={12} md={6}>
                  <h4 id="table-title">Season Averages</h4>
                  <Nav variant="pills" id="season-tabs">
                    {sortedSeasons?.map((record, idx) => {
                      return (
                        <Nav.Item key={idx}>
                          <Nav.Link eventKey={`${idx}`}>
                            {record.season}
                          </Nav.Link>
                        </Nav.Item>
                      );
                    })}
                  </Nav>
                  <Tab.Content>
                    {sortedSeasons?.map((record, idx) => {
                      return (
                        <Tab.Pane key={idx} eventKey={`${idx}`}>
                          <Table>
                            <tbody>
                              <tr>
                                <td id="table-label">Minutes Per Game</td>
                                <td id="table-data">{record.minutesPlayed}</td>
                              </tr>
                              <tr>
                                <td id="table-label">Points Per Game</td>
                                <td id="table-data">{record.pointsMade}</td>
                              </tr>
                              <tr>
                                <td id="table-label">3PA</td>
                                <td id="table-data">
                                  {record.threePointAttempt}
                                </td>
                              </tr>
                              <tr>
                                <td id="table-label">3PM</td>
                                <td id="table-data">{record.threePointMade}</td>
                              </tr>
                              <tr>
                                <td id="table-label">3P%</td>
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
              </Tab.Container>
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default SinglePlayerCharts;
