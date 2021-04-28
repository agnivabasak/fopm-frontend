import React, { useState } from "react";
import "./ActivityStatus.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsFillPersonFill } from "react-icons/bs";
import fopm_logo from "../../assets/imgs/logo.svg";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";

function ControlledBoard() {
  const board = {
    columns: [
      {
        id: 1,
        title: "Backlog",
        cards: [
          {
            id: 1,
            title: "Add card",
            description: "Add capability to add a card in a column",
          },
        ],
      },
      {
        id: 2,
        title: "Assigned",
        cards: [
          {
            id: 2,
            title: "Drag-n-drop support",
            description: "Move a card between the columns",
          },
        ],
      },
      {
        id: 3,
        title: "In Progress",
        cards: [
          {
            id: 3,
            title: "Drag-n-drop support",
            description: "Move a card between the columns",
          },
        ],
      },
      {
        id: 4,
        title: "Completed",
        cards: [
          {
            id: 4,
            title: "Drag-n-drop support",
            description: "Move a card between the columns",
          },
        ],
      },
    ],
  };
  const [controlledBoard, setBoard] = useState(board);

  function handleCardMove(_card, source, destination) {
    const updatedBoard = moveCard(controlledBoard, source, destination);
    setBoard(updatedBoard);
  }

  return (
    <Board onCardDragEnd={handleCardMove} disableColumnDrag>
      {controlledBoard}
    </Board>
  );
}

export default function ActivityStatus() {
  return (
    <Container fluid id="ActivityStatus__container">
      <Navbar className="Common__navbar" bg="light" expand="lg">
        <Navbar.Brand>
          <img src={fopm_logo} className="Common__fopmlogo" />
        </Navbar.Brand>
        <BsFillPersonFill className="Common__profilelogo" />
      </Navbar>
      <h3 id="ActivityStatus__title">Activities</h3>
      <h4 id="ActivityStatus__subtitle">
        for The Software Engineering Project
      </h4>
      <h4 id="ActivityStatus__instruction">
        Drag and drop activities to change their status
      </h4>
      <ControlledBoard />
      <div className="Common__footerbtns">
        <Button variant="primary">Go Back</Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </Container>
  );
}
