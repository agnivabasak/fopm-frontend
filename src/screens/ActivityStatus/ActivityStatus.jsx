import React, { useState } from "react";
import "./ActivityStatus.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsFillPersonFill } from "react-icons/bs";
import fopm_logo from "../../assets/imgs/logo.svg";
import Board, { moveCard } from "@lourenci/react-kanban";
import "@lourenci/react-kanban/dist/styles.css";
import PropTypes from "prop-types";

function ControlledBoard() {
  const board = {
    columns: [
      {
        id: 1,
        title: "Backlog",
        cards: [],
      },
      {
        id: 2,
        title: "Assigned",
        cards: [
          {
            id: 5,
            title: "Test Phase 1 Development",
            description: "Test the phase 1 product made",
          },
        ],
      },
      {
        id: 3,
        title: "In Progress",
        cards: [
          {
            id: 3,
            title: "Determine System Reqs",
            description:
              "Let the dev and design team define the system requirements",
          },
          {
            id: 4,
            title: "Start Phase 1 Development",
            description: "Make design and develop phase 1 of product",
          },
        ],
      },
      {
        id: 4,
        title: "Completed",
        cards: [
          {
            id: 1,
            title: "Gather Project Requirements",
            description: "Gather req of proj and make SRS document",
          },
          {
            id: 2,
            title: "Gather Dev and Dsgn Team",
            description: "based on req gather a suitable dev adn design team",
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

export default function ActivityStatus({ setComp }) {
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
        <Button variant="primary" onClick={() => setComp(0)}>
          Go Back
        </Button>
        <Button variant="primary">Save Changes</Button>
      </div>
    </Container>
  );
}

ActivityStatus.propTypes = {
  setComp: PropTypes.func.isRequired,
};
