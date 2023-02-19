import React, { useEffect, useState } from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  DropdownButton,
  Dropdown,
  Modal,
} from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import {
  fetchAllPlayerBasicInfo,
  fetchAllPlayerStats,
  selectPlayerBasicInfo,
  selectPlayerStats,
} from "./allPlayersSlice";
import SinglePlayerCharts from "./SinglePlayerCharts";
import {
  fetchSinglePlayerStats,
  selectSinglePlayerStats,
} from "./singlePlayerSlice";

const AllPlayers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
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
      a.playerBasic.lastName.localeCompare(b.playerBasic.lastName)
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
      <Row>
        <DropdownButton
          id="player-sort-dropdown"
          title="Sort by"
          variant="secondary"
          className="d-flex justify-content-center"
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
        <p style={{ color: "white" }}>
          Players are currently sorted by 2022-2023 3PP
        </p>
      </Row>
      <Row>
        {playersDisplayedInfo?.length
          ? playersDisplayedInfo?.map((player) => {
              return (
                <Card id="player-card" className="mx-auto" key={player.id}>
                  <Button
                    style={{
                      backgroundColor: "inherit",
                      padding: "0px",
                      borderColor: "inherit",
                    }}
                    onClick={() => {
                      console.log("clicked");
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
                          style={{ color: "black", padding: "5px" }}
                          className="d-flex justify-content-end"
                        >
                          {player.playerBasic.firstName.toUpperCase()}{" "}
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
                  </Button>
                </Card>
              );
            })
          : stats23?.map((player) => {
              return (
                <Card id="player-card" className="mx-auto" key={player.id}>
                  <Button
                    style={{
                      backgroundColor: "inherit",
                      padding: "0px",
                      borderColor: "inherit",
                    }}
                    onClick={() => {
                      console.log("clicked");
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
                          style={{ color: "black", padding: "5px" }}
                          className="d-flex justify-content-end"
                        >
                          {player.playerBasic.firstName.toUpperCase()}{" "}
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
                  </Button>
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
        >
          <Modal.Title className="ms-auto" id="modal-title">
            {modalData.playerBasic?.firstName.toUpperCase()}{" "}
            {modalData.playerBasic?.lastName.toUpperCase()}
          </Modal.Title>
        </Modal.Header>
        <Modal.Body id="modal-body">
          <SinglePlayerCharts id={modalData.playerBasic?.id} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AllPlayers;
