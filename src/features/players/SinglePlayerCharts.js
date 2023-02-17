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

const SinglePlayerCharts = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const playerData = useSelector(selectSinglePlayerBasicInfo);

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

  useEffect(() => {
    dispatch(fetchSinglePlayerBasicInfo(id));
  }, [id, dispatch]);

  return (
    <Container fluid>
      {playerData && (
        <Card
          style={{
            backgroundColor: "white",
            width: "50%",
            minWidth: "20rem",
            marginTop: "1rem",
          }}
          className="mx-auto"
        >
          <Card.Header>
            {firstName} {lastName}
          </Card.Header>
          <Card.Body className="me-auto">
            <Row>
              <Col>
                <img
                  src={imageUrl}
                  style={{ maxWidth: "100%", maxHeight: "90%" }}
                  alt={`${firstName} ${lastName}`}
                />
                <Card.Header className="d-flex justify-content-between">
                  <p
                    style={{
                      fontSize: "10px",
                      padding: "0px",
                      marginBottom: "2px",
                    }}
                    className="text-muted"
                  >
                    Height: {heightFt}`{heightIn}"
                  </p>
                  <p
                    style={{
                      fontSize: "10px",
                      padding: "0px",
                      margin: "1px",
                    }}
                    className="text-muted"
                  >
                    Weight: {weight} pounds
                  </p>
                </Card.Header>
              </Col>
            </Row>
            <Row>
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
