import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Col,
  Container,
  Dropdown,
  DropdownButton,
  Modal,
  Row,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchAllPlayerBasicInfo,
  fetchAllPlayerStats,
  selectPlayerStats,
} from "./allPlayersSlice";
import SinglePlayerCharts from "./SinglePlayerCharts";
import { motion } from "framer-motion";

const AllPlayers = () => {
  const dispatch = useDispatch();
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState([]);
  const playerStats = useSelector(selectPlayerStats);

  useEffect(() => {
    dispatch(fetchAllPlayerBasicInfo());
    dispatch(fetchAllPlayerStats());
  }, [dispatch]);

  const stats23 = [...playerStats]
    .filter((instance) => {
      return instance.season === "2022-2023";
    })
    .sort((a, b) =>
      a?.playerBasic?.lastName.localeCompare(b?.playerBasic?.lastName)
    );

  const stats22 = [...playerStats].filter((instance) => {
    return instance.season === "2021-2022";
  });
  const stats21 = [...playerStats].filter((instance) => {
    return instance.season === "2020-2021";
  });

  const dropdownOptions = ["2022-2023", "2021-2022", "2020-2021"];
  const [playersDisplayedInfo, setPlayersDisplayedInfo] = useState(null);

  const sortPlayerButton = (ev) => {
    if (ev === "2022-2023") {
      setPlayersDisplayedInfo(
        stats23?.sort((a, b) => {
          return b.threePointPercent - a.threePointPercent;
        })
      );
    } else if (ev === "2021-2022") {
      setPlayersDisplayedInfo(
        stats22?.sort((a, b) => {
          return b.threePointPercent - a.threePointPercent;
        })
      );
    } else if (ev === "2020-2021") {
      setPlayersDisplayedInfo(
        stats21?.sort((a, b) => {
          return b.threePointPercent - a.threePointPercent;
        })
      );
    } else {
      setPlayersDisplayedInfo(stats23);
    }
  };

  return (
    <Container fluid id="players-container">
      <Row id="player-row">
        <Col sm={7} className="ms-auto">
          <h1 id="player-header">Player Standings</h1>
          <h3 id="player-header">Sort by Season</h3>
          <p id="section-instructions-left">
            Using the <strong>'sort by' </strong>button below, sort players by
            their season average 3-point percentage or click into their profile
            to see specific season average information.
            <br />
          </p>
        </Col>
      </Row>
      <Row id="player-row2">
        <DropdownButton
          id="player-sort-dropdown"
          title="Sort by"
          variant="secondary"
          onSelect={(ev) => sortPlayerButton(ev)}
        >
          {dropdownOptions.map((option, idx) => {
            return (
              <Dropdown.Item eventKey={option} key={idx}>
                {option}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>{" "}
      </Row>
      <Row id="player-row-card">
        {playersDisplayedInfo?.length
          ? playersDisplayedInfo?.map((player) => {
              return (
                <Card id="player-card" key={player.id}>
                  {" "}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      style={{
                        backgroundColor: "inherit",
                        padding: "0px",
                        borderColor: "inherit",
                      }}
                      onClick={() => {
                        setModalData(player);
                        setModalShow(true);
                      }}
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
                            style={{
                              color: "black",
                              padding: "15px",
                              textAlign: "right",
                            }}
                            className="d-flex justify-content-end"
                          >
                            {player.playerBasic.firstName.toUpperCase()}
                            <br />
                            {player.playerBasic.lastName.toUpperCase()}
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
                              src={player.playerBasic.imageUrl}
                              alt={`Nets Player: ${player.playerBasic.firstName} ${player.playerBasic.lastName}`}
                            />{" "}
                          </Col>
                          <Col>
                            <p id="player-card-text">
                              Height: {player.playerBasic.heightFt}`
                              {player.playerBasic.heightIn}
                            </p>
                            <p id="player-card-text">
                              {" "}
                              Weight: {player.playerBasic.weight} lbs
                            </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Button>{" "}
                  </motion.div>
                </Card>
              );
            })
          : stats23?.map((player) => {
              return (
                <Card id="player-card" key={player.id}>
                  {" "}
                  <motion.div
                    whileHover={{ scale: 1.08 }}
                    whileTap={{ scale: 0.9 }}
                  >
                    <Button
                      style={{
                        backgroundColor: "inherit",
                        padding: "0px",
                        borderColor: "inherit",
                      }}
                      onClick={() => {
                        setModalData(player);
                        setModalShow(true);
                      }}
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
                            style={{
                              color: "black",
                              padding: "15px",
                              size: "15px",
                              textAlign: "right",
                            }}
                            className="d-flex justify-content-end"
                          >
                            {player.playerBasic.firstName.toUpperCase()}
                            <br />
                            {player.playerBasic.lastName.toUpperCase()}
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
                              src={player.playerBasic.imageUrl}
                              alt={`Nets Player: ${player.playerBasic.firstName} ${player.playerBasic.lastName}`}
                            />{" "}
                          </Col>
                          <Col>
                            <p id="player-card-text">
                              Height: {player.playerBasic.heightFt}`
                              {player.playerBasic.heightIn}
                            </p>
                            <p id="player-card-text">
                              {" "}
                              Weight: {player.playerBasic.weight} lbs
                            </p>
                          </Col>
                        </Row>
                      </Card.Body>
                    </Button>{" "}
                  </motion.div>
                </Card>
              );
            })}
      </Row>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Header
          closeButton
          id="modal-header"
          className="d-flex justify-content-center"
        ></Modal.Header>
        <Modal.Body id="modal-body">
          <SinglePlayerCharts id={modalData.playerBasic?.id} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AllPlayers;
