import React from "react";
import { FrappeGantt } from "frappe-gantt-react";
import "./ProjectGantt.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import Button from "react-bootstrap/Button";
import { BsFillPersonFill } from "react-icons/bs";
import fopm_logo from "../../assets/imgs/logo.svg";
import PropTypes from "prop-types";

export default function ProjectGantt({ tasks, setComp }) {
  return (
    <Container fluid id="ProjectDashboard__container">
      <Navbar className="Common__navbar" bg="light" expand="lg">
        <Navbar.Brand>
          <img src={fopm_logo} className="Common__fopmlogo" />
        </Navbar.Brand>
        <BsFillPersonFill className="Common__profilelogo" />
      </Navbar>
      <h3 id="ActivityStatus__title">Gantt Chart</h3>
      <h4 id="ActivityStatus__subtitle">
        for The Software Engineering Project
      </h4>
      <div id="ProjectDashboard__gantt">
        <FrappeGantt
          tasks={tasks}
          viewMode={"Day"}
          onClick={(task) => console.log(task)}
          onDateChange={(task, start, end) => console.log(task, start, end)}
          onProgressChange={(task, progress) => console.log(task, progress)}
          onTasksChange={(tasks) => console.log(tasks)}
        />
      </div>

      <div id="ProjectDashboard__footerbtns">
        <Button
          variant="primary"
          onClick={() => {
            window.location.href = "/OrgDashboard";
          }}
        >
          Go Back
        </Button>
        <Button variant="primary" onClick={() => setComp(1)}>
          Change Activity Status
        </Button>
        <Button
          variant="primary"
          onClick={() => {
            window.location.href = "/EmployeeReport";
          }}
        >
          Generate Report
        </Button>
      </div>
    </Container>
  );
}

ProjectGantt.propTypes = {
  tasks: PropTypes.array.isRequired,
  setTasks: PropTypes.func.isRequired,
  setComp: PropTypes.func.isRequired,
};
