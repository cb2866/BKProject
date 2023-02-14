import { QueuePlayNextRounded } from "@mui/icons-material";
import React, { useEffect } from "react";
import { Container, Card, Row, Col, OverlayTrigger } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  selectPlayerBasicInfo,
  selectPlayerStats,
  fetchAllPlayerBasicInfo,
  fetchAllPlayerStats,
} from "./allPlayersSlice";

const AllPlayers = () => {
  const dispatch = useDispatch();
  const playersBasicInfo = useSelector(selectPlayerBasicInfo);
  const playerSeasonStats = useSelector(selectPlayerStats);

  useEffect(() => {
    dispatch(fetchAllPlayerBasicInfo());
    dispatch(fetchAllPlayerStats());
  }, [dispatch]);

  return (
    <Container fluid>
      <Row className="m-2">
        <h1>`22-`23 Players</h1>
      </Row>
      <Row className="mx-auto">
        {playersBasicInfo.length &&
          playersBasicInfo.map(
            ({
              id,
              firstName,
              lastName,
              heightFt,
              heightIn,
              weight,
              position,
            }) => {
              return (
                <Card
                  id="playerCard"
                  className="mx-auto m-2"
                  key={id}
                  style={{
                    width: "18rem",
                    padding: "0",
                    boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
                  }}
                >
                  <Card.Header
                    style={{
                      backgroundColor: "gray",
                      color: "white",
                      border: "none",
                    }}
                  >
                    {firstName.toUpperCase()} {lastName.toUpperCase()}
                  </Card.Header>
                  <Card.Body>Player Data</Card.Body>
                  <Card.Footer className="d-flex justify-content-between">
                    <p
                      className="text-muted"
                      style={{
                        fontSize: "10px",
                        padding: "0px",
                        margin: "1px",
                      }}
                    >
                      Height: {heightFt}`{heightIn}
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
                  </Card.Footer>
                </Card>
              );
            }
          )}
      </Row>
    </Container>
  );
};

export default AllPlayers;
