import React from "react";
import "./Dashboard.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import fopm_logo from "../../assets/imgs/logo.svg";
import { BsFillPersonFill } from "react-icons/bs";
import CardCarousel from "../../Components/CardCarousel/CardCarousel";

export default function LandingScreen() {
  //example data for now
  const orgs = [
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    { orgName: "b", orgId: 2, strength: 24 },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
    {
      orgName: "The Software Engineering Organization",
      orgId: 1,
      strength: 23,
    },
  ];
  return (
    <Container fluid id="Dashboard__container">
      <Navbar className="Common__navbar" bg="light" expand="lg">
        <Navbar.Brand>
          <img src={fopm_logo} className="Common__fopmlogo" />
        </Navbar.Brand>
        <BsFillPersonFill className="Common__profilelogo" />
      </Navbar>
      <h3 id="Dashboard__title">Organizations</h3>
      {orgs.length === 0 ? (
        <p id="Dashboard__noorg">
          You haven’t created or joined any organization yet.
        </p>
      ) : (
        <CardCarousel forwardLink="/OrgDashboard" orgs={orgs} />
      )}
      <div className="Common__footerbtns">
        <Button variant="primary">See Invitations</Button>
        <Button variant="primary">Create Organization</Button>
      </div>
    </Container>
  );
}
