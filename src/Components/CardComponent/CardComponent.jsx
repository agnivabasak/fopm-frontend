import React from "react";
import "./CardComponent.css";
import Card from "react-bootstrap/Card";
import { BsChevronRight } from "react-icons/bs";
import PropTypes from "prop-types";

export default function CardComponent(props) {
  return (
    <Card
      onClick={() => {
        window.location.href = props.forwardLink;
      }}
      className="CardComponent__container"
    >
      <Card.Body className="CardComponent__body">
        <div className="CardComponent__text">
          <Card.Title className="CardComponent__title">
            {props.title}
          </Card.Title>
          <Card.Text className="CardComponent__subtitle">
            {props.strength} Members
          </Card.Text>
        </div>
        <BsChevronRight className="CardComponent__chevron" />
      </Card.Body>
    </Card>
  );
}

CardComponent.propTypes = {
  title: PropTypes.string.isRequired,
  strength: PropTypes.number.isRequired,
  forwardLink: PropTypes.string.isRequired,
};
