import React from "react";
import {
  Button,
  Card,
  Container,
  Row,
  Col,
  Tabs,
  Tab,
  Table,
} from "react-bootstrap";

const PendingGames = ({ pendingGames }) => {
  
  const febGames = pendingGames.filter((game) => {
    return game.date.includes("2023-02");
  });

  const marchGames = pendingGames.filter((game) => {
    return game.date.includes("2023-03");
  });

  const aprilGames = pendingGames.filter((game) => {
    return game.date.includes("2023-04");
  });

  return (
    <>
      <Tabs
        defaultActiveKey="February"
        id="uncontrolled-tab-example"
        className="mx-auto"
      >
        <Tab eventKey="February" title="February">
          <Table
            id="games-table"
            size="sm"
            borderless
            hover
            responsive="sm"
            style={{ backgroundColor: "white", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th colSpan={3} className="text-center">
                  Upcoming Games
                </th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {febGames.length &&
                febGames.map(({ id, date, awayTeam, homeTeam }) => {
                  return (
                    <tr key={id}>
                      <td>{date}</td>
                      <td>{homeTeam}</td>
                      <td>{awayTeam}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="March" title="March">
          <Table
            id="games-table"
            borderless
            hover
            responsive="sm"
            style={{ backgroundColor: "white", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th colSpan={3} className="text-center">
                  Upcoming Games
                </th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {marchGames.length &&
                marchGames.map(({ id, date, awayTeam, homeTeam }) => {
                  return (
                    <tr key={id}>
                      <td>{date}</td>
                      <td>{homeTeam}</td>
                      <td>{awayTeam}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Tab>
        <Tab eventKey="April" title="April">
          <Table
            id="games-table"
            borderless
            hover
            responsive="sm"
            style={{ backgroundColor: "white", textAlign: "left" }}
          >
            <thead>
              <tr>
                <th colSpan={3} className="text-center">
                  Upcoming Games
                </th>
              </tr>
              <tr>
                <th>Date</th>
                <th>Home</th>
                <th>Away</th>
              </tr>
            </thead>
            <tbody>
              {aprilGames.length &&
                aprilGames.map(({ id, date, awayTeam, homeTeam }) => {
                  return (
                    <tr key={id}>
                      <td>{date}</td>
                      <td>{homeTeam}</td>
                      <td>{awayTeam}</td>
                    </tr>
                  );
                })}
            </tbody>
          </Table>
        </Tab>
      </Tabs>
    </>
  );
};
export default PendingGames;
