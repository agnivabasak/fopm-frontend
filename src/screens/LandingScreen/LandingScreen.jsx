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
import { signUpUser, logInUser } from "../../userHelperFunctions/fopm";
import { toastDark } from "../../userHelperFunctions/toast";
import cookies from "react-cookies";
import ToastContainer from "../../Components/Toast/Toast";

export default function LandingScreen() {
  const [passShow, setPassShow] = useState(false);
  const [noAcc, setNoAcc] = useState(true);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [pass, setPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");
  function validateEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  function submit() {
    if (noAcc) {
      if (name == "") {
        toastDark("User Name cannot be empty!");
      } else if (!validateEmail(email)) {
        toastDark("Invalid Email ID");
      } else if (pass.length < 6) {
        toastDark("Password should be atleast 6 characters long");
      } else if (pass !== confirmPass) {
        toastDark("Password is not equal to the confirm password!");
      } else {
        try {
          signUpUser(name, email, pass, confirmPass)
            .then((resp) => {
              console.log(resp);
              toastDark(
                "Account Succesfully Created! You can now log into your account!"
              );
              setName("");
              setPass("");
              setConfirmPass("");
              setEmail("");
              setNoAcc(!noAcc);
              /*cookies.save("token", resp.data.token);
              window.location.href = "/Dashboard";*/
            })
            .catch((err) => {
              console.log("error aya", err);
              if (err.data.username) {
                toastDark(err.data.username[0]);
              } else if (err.data.email) {
                toastDark(
                  "The email entered is either incorrect or is already in use by another account!"
                );
              } else if (err.data.password) {
                toastDark(err.data.password[0]);
              } else {
                toastDark("User Already Exists!");
              }
            });
        } catch (err) {
          console.log("Error aya but 2", err);
          toastDark("User Already Exists!");
        }
      }
    } else {
      if (name == "") {
        toastDark("Please enter a name");
      } else if (pass == "") {
        toastDark("Please enter a password");
      } else {
        try {
          logInUser(name, pass)
            .then((resp) => {
              console.log(resp);
              cookies.save("refresh", resp.data.refresh);
              cookies.save("token", resp.data.access);
              window.location.href = "/Dashboard";
            })
            .catch((err) => {
              console.log("error aya", err);
              toastDark("The password or the username entered is incorrect!");
            });
        } catch {
          console.log("Error aya but 2");
          toastDark("The password or the username entered is incorrect!");
        }
      }
    }
  }

  return (
    <Container fluid>
      <Row>
        <Col id="LandingScreen__auth" lg={4}>
          <img src={fopm_logo} alt="FOPM logo" />
          <div>
            <h3>{noAcc ? "Create an Account" : "Sign In"}</h3>
            <Form id="LandingScreen__form">
              <Form.Group controlId="formBasicName">
                <Form.Control
                  type="text"
                  placeholder="Name"
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group
                controlId="formBasicEmail"
                className={noAcc ? "dummy" : "nodisp"}
              >
                <Form.Control
                  type="email"
                  placeholder="Email"
                  value={email}
                  onChange={(e) => {
                    setEmail(e.target.value);
                  }}
                />
              </Form.Group>
              <Form.Group controlId="formBasicPassword">
                <InputGroup>
                  <Form.Control
                    type={passShow ? "text" : "password"}
                    placeholder="Password"
                    value={pass}
                    onChange={(e) => {
                      setPass(e.target.value);
                    }}
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
                    value={confirmPass}
                    onChange={(e) => {
                      setConfirmPass(e.target.value);
                    }}
                  />
                </InputGroup>
              </Form.Group>
              <Button variant="primary" onClick={() => submit()}>
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
        <ToastContainer />
      </Row>
    </Container>
  );
}
