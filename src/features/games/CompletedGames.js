import React, { useState, useRef } from "react";
import {
  Card,
  Tab,
  Table,
  Tabs,
  Modal,
  OverlayTrigger,
  Popover,
} from "react-bootstrap";
import { useNavigate } from "react-router-dom";
import SingleGame from "./SingleGame";

const CompletedGames = ({ completedGames }) => {
  const navigate = useNavigate();

  const octoberGames = completedGames.filter((game) => {
    return game.date.includes("2022-10");
  });

  const novemberGames = completedGames.filter((game) => {
    return game.date.includes("2022-11");
  });

  const decemberGames = completedGames.filter((game) => {
    return game.date.includes("2022-12");
  });

  const januaryGames = completedGames.filter((game) => {
    return game.date.includes("2023-01");
  });
  const februaryGames = completedGames.filter((game) => {
    return game.date.includes("2023-02");
  });

  const [isShown, setIsShown] = useState(false);
  const [clickedGameId, setClickedGameId] = useState(null);

  return (
    <Card id="games-card">
      <Tabs defaultActiveKey="October" id="games-tab" fill>
        <Tab eventKey="October" id="games-tab" title="October">
          <Table id="games-table" size="sm" borderless hover responsive="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {octoberGames.length
                ? octoberGames.map(
                    ({ id, gameId, date, awayTeam, homeTeam }) => {
                      return (
                        <tr
                          key={id}
                          onClick={() => {
                            setIsShown(true);
                            setClickedGameId(gameId);
                          }}
                        >
                          <td>{date}</td>
                          <td>{homeTeam}</td>
                          <td>{awayTeam}</td>
                        </tr>
                      );
                    }
                  )
                : null}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="November" id="games-tab" title="November">
          <Table
            id="games-table"
            borderless
            hover
            size="sm"
            responsive="sm"
            style={{ textAlign: "left" }}
          >
            <thead>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {novemberGames.length
                ? novemberGames.map(
                    ({ id, gameId, date, awayTeam, homeTeam }) => {
                      return (
                        <tr
                          key={id}
                          onClick={() => {
                            setIsShown(true);
                            setClickedGameId(gameId);
                          }}
                        >
                          <td>{date}</td>
                          <td>{homeTeam}</td>
                          <td>{awayTeam}</td>
                        </tr>
                      );
                    }
                  )
                : null}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="December" id="games-tab" title="December">
          <Table id="games-table" borderless hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {decemberGames.length
                ? decemberGames.map(
                    ({ id, gameId, date, awayTeam, homeTeam }) => {
                      return (
                        <tr
                          key={id}
                          onClick={() => {
                            setIsShown(true);
                            setClickedGameId(gameId);
                          }}
                        >
                          <td>{date}</td>
                          <td>{homeTeam}</td>
                          <td>{awayTeam}</td>
                        </tr>
                      );
                    }
                  )
                : null}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="January" title="January">
          <Table id="games-table" borderless hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {januaryGames.length
                ? januaryGames.map(
                    ({ id, gameId, date, awayTeam, homeTeam }) => {
                      return (
                        <tr
                          key={id}
                          onClick={() => {
                            setIsShown(true);
                            setClickedGameId(gameId);
                          }}
                        >
                          <td>{date}</td>
                          <td>{homeTeam}</td>
                          <td>{awayTeam}</td>
                        </tr>
                      );
                    }
                  )
                : null}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="February" title="February">
          <Table id="games-table" borderless hover size="sm" responsive="sm">
            <thead>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {februaryGames.length
                ? februaryGames.map(
                    ({ id, gameId, date, awayTeam, homeTeam }) => {
                      return (
                        <tr
                          key={id}
                          onClick={() => {
                            setIsShown(true);
                            setClickedGameId(gameId);
                          }}
                        >
                          <td>{date}</td>
                          <td>{homeTeam}</td>
                          <td>{awayTeam}</td>
                        </tr>
                      );
                    }
                  )
                : null}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
      {isShown && (
        <Modal
          show={isShown}
          className="modal left"
          onHide={() => setIsShown(false)}
          size="lg"
        >
          <Modal.Body>
            <SingleGame gameId={clickedGameId} />
          </Modal.Body>
        </Modal>
      )}
    </Card>
  );
};
export default CompletedGames;
