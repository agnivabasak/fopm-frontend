import React, { useState } from "react";
import "./Dashboard.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import fopm_logo from "../../assets/imgs/logo.svg";
import { BsFillPersonFill } from "react-icons/bs";
import CardCarousel from "../../Components/CardCarousel/CardCarousel";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import { createOrg } from "../../userHelperFunctions/fopm";
import { toastDark } from "../../userHelperFunctions/toast";
import ToastContainer from "../../Components/Toast/Toast";
export default function LandingScreen() {
  const useStyles = makeStyles(() => ({
    modal: {
      display: "flex",
      alignItems: "center",
      justifyContent: "center",
    },
  }));
  const [open, setOpen] = useState(false);
  const [newOrgName, setNewOrgName] = useState("");
  const [newOrgDesc, setNewOrgDesc] = useState("");
  const classes = useStyles();
  const handleClose = () => {
    setOpen(false);
  };
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
        <Button
          variant="primary"
          onClick={() => {
            setOpen(true);
          }}
        >
          Create Organization
        </Button>
      </div>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
        style={{
          border: "none",
          outline: "none",
        }}
      >
        <Fade
          style={{
            border: "none",
            outline: "none",
          }}
          in={open}
        >
          <div id="Dashboard__createorg-modal">
            <h2>Create Organization</h2>
            <div id="Dashboard__createorg-modalinfo">
              <input
                type="text"
                placeholder="Organization Name"
                value={newOrgName}
                onChange={(e) => {
                  setNewOrgName(e.target.value);
                }}
              ></input>
              <textarea
                type="text"
                placeholder="Organization Description"
                rows="11"
                res
                value={newOrgDesc}
                onChange={(e) => {
                  setNewOrgDesc(e.target.value);
                }}
              ></textarea>
            </div>
            <h3
              onClick={() => {
                try {
                  createOrg(newOrgName, newOrgDesc)
                    .then((resp) => {
                      console.log(resp);
                      toastDark("Organization successfully created!");
                      setNewOrgName("");
                      setNewOrgDesc("");
                      setOpen(false);
                    })
                    .catch((err) => {
                      console.log("error aya", err);
                      if (err.data.name) {
                        toastDark("Name : " + err.data.name[0]);
                      } else if (err.data.description) {
                        toastDark("Description : " + err.data.description[0]);
                      } else {
                        toastDark("Organization Already Exists!");
                      }
                    });
                } catch (err) {
                  console.log("Error aya but 2", err);
                  toastDark("Organization Already Exists!");
                }
              }}
            >
              Create Organization
            </h3>
          </div>
        </Fade>
      </Modal>
      <ToastContainer />
    </Container>
  );
}
