import React from "react";
import "./OrgDashboard.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import fopm_logo from "../../assets/imgs/logo.svg";
import { BsFillPersonFill } from "react-icons/bs";
import CardCarousel from "../../Components/CardCarousel/CardCarousel";

export default function LandingScreen() {
  //maintaining org keyword to stay consistent with component - details are about project and not org
  const orgs = [
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "b", orgId: 2, strength: 24 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
    { orgName: "The Software Engineering Project", orgId: 1, strength: 23 },
  ];
  return (
    <Container fluid id="OrgDashboard__container">
      <Navbar className="Common__navbar" bg="light" expand="lg">
        <Navbar.Brand>
          <img src={fopm_logo} className="Common__fopmlogo" />
        </Navbar.Brand>
        <BsFillPersonFill className="Common__profilelogo" />
      </Navbar>
      <h3 id="OrgDashboard__title">Projects</h3>
      {orgs.length === 0 ? (
        <p id="OrgDashboard__noorg">
          You haven’t created or joined any project yet.
        </p>
      ) : (
        <CardCarousel forwardLink="/ProjectDashboard" orgs={orgs} />
      )}
      <div className="Common__footerbtns">
        <Button variant="primary">See Invitations</Button>
        <Button variant="primary">Create Project</Button>
      </div>
    </Container>
  );
}
