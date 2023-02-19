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
  selectPlayerBasicInfo,
} from "./allPlayersSlice";
import SinglePlayerCharts from "./SinglePlayerCharts";

const AllPlayers = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [modalShow, setModalShow] = useState(false);
  const [modalData, setModalData] = useState(null);
  console.log(modalData);
  const playersBasicInfo = useSelector(selectPlayerBasicInfo);

  const dropdownOptions = ["2022-2023", "2021-2022", "2020-2021"];

  useEffect(() => {
    dispatch(fetchAllPlayerBasicInfo());
  }, [dispatch]);

  // console.log(playersBasicInfo);

  // const [sortedPlayersBy3PP, setSortedPlayersBy3PP] =
  //   useState(playersBasicInfo);

  // const S23 = [...playersBasicInfo].filter((season)=> {
  //   return (

  //   )

  // })
  // console.log(sortedPlayersBy3PP);

  //sort players by who has the higher attempt/success ratio from 2022-23 season
  const sortedPlayersBy3PP = [...playersBasicInfo].sort((a, b) => {
    return (
      b.seasonPlayerStats[b.seasonPlayerStats.length - 1].threePointPercent -
      a.seasonPlayerStats[a.seasonPlayerStats.length - 1].threePointPercent
    );
  });
  console.log(sortedPlayersBy3PP);

  // const sortPlayerButton = (ev) => {
  //   let category = ev;
  //   console.log("clicked", ev);
  //   if (ev === '2022-2023') {
  //     [...playersBasicInfo].filter((

  //     ))

  //   }

  //   setSortedPlayersBy3PP(sorted);
  // };

  return (
    <Container fluid id="players-container">
      <Row>
        <DropdownButton
          id="player-sort-dropdown"
          title="Sort by"
          variant="secondary"
          className="d-flex justify-content-center"
          // onSelect={(ev) => sortPlayerButton(ev)}
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
                <Card id="player-card" className="mx-auto" key={id}>
                  <Button
                    style={{
                      backgroundColor: "inherit",
                      padding: "0px",
                      borderColor: "inherit",
                    }}
                    onClick={() => {
                      console.log("clicked");
                      setModalData(id);
                      setModalShow(true);
                    }}
                    // onClick={() => navigate(`/players/${id}`)}
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
                        </Col>
                        <Col>
                          <p id="player-card-text">
                            Height: {heightFt}`{heightIn}
                          </p>
                          <p id="player-card-text"> Weight: {weight} lbs</p>
                        </Col>
                      </Row>
                    </Card.Body>
                  </Button>
                </Card>
              );
            }
          )}
      </Row>
      <Modal
        show={modalShow}
        onHide={() => setModalShow(false)}
        size="lg"
        centered
      >
        <Modal.Header closeButton />
        <Modal.Body>
          <SinglePlayerCharts id={modalData} />
        </Modal.Body>
      </Modal>
    </Container>
  );
};

export default AllPlayers;
