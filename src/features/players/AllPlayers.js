import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  fetchAllPlayerBasicInfo,
  selectPlayerBasicInfo,
} from "./allPlayersSlice";

const AllPlayers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playersBasicInfo = useSelector(selectPlayerBasicInfo);

  //sort players by who has the higher attempt/success ratio from 2022-23 season
  const sortedPlayersBy3PP = [...playersBasicInfo].sort((a, b) => {
    return (
      b.seasonPlayerStats[b.seasonPlayerStats.length - 1].threePointPercent -
      a.seasonPlayerStats[a.seasonPlayerStats.length - 1].threePointPercent
    );
  });
  console.log(sortedPlayersBy3PP);

  useEffect(() => {
    dispatch(fetchAllPlayerBasicInfo());
  }, [dispatch]);

  return (
    <Container fluid id="players-container">
      <Row>
        <p style={{ color: "white" }}>
          Players are currently sorted by 2022-2023 3PP
        </p>
      </Row>
      <Row className="me-2">
        {sortedPlayersBy3PP.length &&
          sortedPlayersBy3PP.map(
            ({
              id,
              firstName,
              lastName,
              heightFt,
              heightIn,
              weight,
              imageUrl,
              position,
            }) => {
              return (
                <Card
                  id="playerCard"
                  className="mx-auto"
                  key={id}
                  style={{
                    width: "20rem",
                    marginRight: "5px",
                    marginLeft: "5px",
                    marginBottom: "20px",
                    padding: "0",
                    boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
                  }}
                >
                  <Button
                    style={{
                      backgroundColor: "inherit",
                      padding: "0px",
                      borderColor: "inherit",
                    }}
                    onClick={() => navigate(`/players/${id}`)}
                  >
                    <Card.Body
                      style={{
                        paddingLeft: "5px",
                        margin: "0px",
                        paddingTop: "0px",
                        paddingBottom: "0px",
                        paddingRight: "10px",
                      }}
                    >
                      <Row>
                        <h3
                          style={{ color: "black", padding: "5px" }}
                          className="d-flex justify-content-end"
                        >
                          {firstName.toUpperCase()} {lastName.toUpperCase()}
                        </h3>
                        <Col xs={6}>
                          <img
                            className="d-flex justify-content-end"
                            style={{
                              maxWidth: "12rem",
                              objectFit: "cover",
                              height: "100%",
                              padding: "0px",
                            }}
                            src={imageUrl}
                            alt={`Nets Player: ${firstName} ${lastName}`}
                          />{" "}
                          '
                        </Col>
                        <Col>
                          <p id="player-card">
                            {" "}
                            Height: {heightFt}`{heightIn}
                          </p>
                          <p id="player-card"> Weight: {weight} lbs</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Button>
                </Card>
              );
            }
          )}
      </Row>
    </Container>
  );
};

export default AllPlayers;
