import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import InputGroup from "react-bootstrap/InputGroup";
import Button from "react-bootstrap/Button";
import { BsFillEyeFill, BsFillEyeSlashFill } from "react-icons/bs";
import "./LandingScreen.css";
import fopm_logo from "../../assets/imgs/logo.svg";
import illustration from "../../assets/imgs/illustration.png";

export default function LandingScreen() {
  const [passShow, setPassShow] = useState(false);
  const [noAcc, setNoAcc] = useState(true);
  /*const [name,setName] = useState("");
    const [email,setEmail] = useState("");
    const [pass,setPass] = useState("");
    const [confirmPass,setConfirmPass] = useState("");*/

  function submit() {
    console.log("something");
  }

  return (
    <Container fluid>
      <Row>
        <Col id="LandingScreen__auth" lg={4}>
          <img src={fopm_logo} alt="FOPM logo" />
          <div>
            <h3>{noAcc ? "Create an Account" : "Sign In"}</h3>
            <Form id="LandingScreen__form">
              <Form.Group
                className={noAcc ? "dummy" : "nodisp"}
                controlId="formBasicName"
              >
                <Form.Control type="text" placeholder="Name" />
              </Form.Group>
              <Form.Group controlId="formBasicEmail">
                <Form.Control type="email" placeholder="Email" />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <InputGroup>
                  <Form.Control
                    type={passShow ? "text" : "password"}
                    placeholder="Password"
                  />
                  <InputGroup.Append>
                    <InputGroup.Text>
                      {passShow ? (
                        <BsFillEyeSlashFill
                          className="LandingScreen__passeye"
                          size={18}
                          onClick={() => setPassShow(!passShow)}
                        />
                      ) : (
                        <BsFillEyeFill
                          className="LandingScreen__passeye"
                          size={18}
                          onClick={() => setPassShow(!passShow)}
                        />
                      )}
                    </InputGroup.Text>
                  </InputGroup.Append>
                </InputGroup>
              </Form.Group>
              <Form.Group
                className={noAcc ? "dummy" : "nodisp"}
                controlId="formBasicConfirmPassword"
              >
                <InputGroup>
                  <Form.Control
                    type="password"
                    placeholder="Confirm Password"
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" type="submit" onClick={() => submit()}>
                Submit
              </Button>
            </Form>
            {noAcc ? (
              <h6>
                Already have an account ?{" "}
                <span
                  className="LandingScreen__changeform"
                  onClick={() => setNoAcc(!noAcc)}
                >
                  Sign In
                </span>
              </h6>
            ) : (
              <h6>
                Don&apos;t have an account ?{" "}
                <span
                  className="LandingScreen__changeform"
                  onClick={() => setNoAcc(!noAcc)}
                >
                  Sign Up
                </span>
              </h6>
            )}
          </div>
        </Col>
        <Col id="LandingScreen__illustration" lg={8}>
          <h4>A free One Stop Tool for all your Project Management needs.</h4>
          <img src={illustration} alt="project manager" />
          <h4>
            All you need to do is make the decisions. The rest, we will take
            care of.
          </h4>
        </Col>
      </Row>
    </Container>
  );
}
