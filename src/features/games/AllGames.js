import React, { useEffect } from "react";
import { Button, Card, Container, Row, Col } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchAllGames, selectGames } from "./gamesSlice";

const AllGames = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const games = useSelector(selectGames);
  console.log(games);
  useEffect(() => {
    dispatch(fetchAllGames());
  }, [dispatch]);
};

export default AllGames;
