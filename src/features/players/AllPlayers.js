import React, { useEffect } from "react";

import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import {
  fetchAllPlayerBasicInfo,
  selectPlayerBasicInfo,
} from "./allPlayersSlice";

const AllPlayers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const playersBasicInfo = useSelector(selectPlayerBasicInfo);

  useEffect(() => {
    dispatch(fetchAllPlayerBasicInfo());
  }, [dispatch]);

  return (
    <Container fluid>
      <Row className="m-2"></Row>
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
              imageUrl,
              position,
            }) => {
              return (
                <Card
                  id="playerCard"
                  className="mx-auto me-2"
                  key={id}
                  style={{
                    width: "18rem",
                    margin: "5px",
                    padding: "0px",
                    boxShadow: "0px 0px 10px 0px rgba(200,200,200,0.75)",
                  }}
                >
                  <Button
                    style={{ backgroundColor: "inherit", padding: "0px" }}
                    onClick={() => navigate(`/players/${id}`)}
                  >
                    <Card.Body style={{ padding: "0px", margin: "0px" }}>
                      <Col>
                        <h3 style={{ color: "black" }}>
                          {firstName.toUpperCase()}
                          <br /> {lastName.toUpperCase()}
                        </h3>
                      </Col>

                      <Col>
                        <img
                          className="cropped"
                          id="playerImg"
                          style={{
                            maxWidth: "100%",
                            minHeight: "15rem",
                            padding: "0px",
                          }}
                          src={imageUrl}
                          alt={`Nets Player: ${firstName} ${lastName}`}
                        />
                      </Col>
                    </Card.Body>
                    {/* <Card.Header
                      style={{
                        backgroundColor: "gray",
                        color: "white",
                        border: "none",
                        fontWeight: "bold",
                      }}
                    >
                      {firstName.toUpperCase()} {lastName.toUpperCase()}
                    </Card.Header> */}
                    <Card.Footer
                      className="d-flex justify-content-between"
                      style={{ color: "black" }}
                    >
                      What info should I place here?{" "}
                    </Card.Footer>{" "}
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
