import React from "react";
import "./CardCarousel.css";
import CardComponent from "../CardComponent/CardComponent";
import Container from "react-bootstrap/Container";
import PropTypes from "prop-types";

export default function CardCarousel(props) {
  return (
    <Container fluid className="CardCarousel__container">
      {props.orgs.map((x) => {
        return (
          <div className="CardCarousel__card" key={x.orgId}>
            <CardComponent
              forwardLink={props.forwardLink}
              title={x.orgName}
              strength={x.strength}
            />
          </div>
        );
      })}
    </Container>
  );
}

CardCarousel.propTypes = {
  orgs: PropTypes.array.isRequired,
  forwardLink: PropTypes.string.isRequired,
};
