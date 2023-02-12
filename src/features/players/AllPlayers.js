import React, { useEffect } from "react";
import { Container, Card, Row } from "react-bootstrap";
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
    <Container>
        <Row>
            {/* {playersBasicInfo && } */}
        </Row>
    </Container>
  )
};

export default AllPlayers;
