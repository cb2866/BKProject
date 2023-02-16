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
          style={{ backgroundColor: "white", width: "50%", marginTop: "1rem" }}
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
              </Col>
            </Row>
            <Row>
              <Tab.Container defaultActiveKey="0">
                {" "}
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
                            <tbody className="text-align-left">
                              <tr>
                                <td id="table-header">Avg. Minutes Played</td>
                                <td>{record.minutesPlayed}</td>
                              </tr>
                              <tr>
                                <td id="table-header">Avg. Points</td>
                                <td>{record.pointsMade}</td>
                              </tr>
                              <tr>
                                <td id="table-header">
                                  {" "}
                                  Avg. Three Points Attempted
                                </td>
                                <td>{record.threePointAttempt}</td>
                              </tr>
                              <tr>
                                <td id="table-header">
                                  {" "}
                                  Avg. Three Points Made
                                </td>
                                <td> {record.threePointMade}</td>
                              </tr>
                              <tr>
                                <td id="table-header">
                                  {" "}
                                  Avg. Three Point Percentage
                                </td>
                                <td>
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
                <Col sm={4}>
                  <Nav variant="pills" className="flex-column">
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
              {/* </Col> */}
            </Row>
          </Card.Body>
        </Card>
      )}
    </Container>
  );
};

export default SinglePlayerCharts;
