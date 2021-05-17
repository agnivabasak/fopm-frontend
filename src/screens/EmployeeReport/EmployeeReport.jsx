import React from "react";
import "./EmployeeReport.css";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import { BsFillPersonFill } from "react-icons/bs";
import fopm_logo from "../../assets/imgs/logo.svg";
import EmployeeData from "./EmployeeData";
import Button from "react-bootstrap/Button";
import ReactExport from "react-export-excel";

const ExcelFile = ReactExport.ExcelFile;
const ExcelSheet = ReactExport.ExcelFile.ExcelSheet;
const ExcelColumn = ReactExport.ExcelFile.ExcelColumn;

export default function EmployeeReport() {
  //closestpositivenumber
  /*function CPN(x) {
    if (x < 0) return 0;
    else return x;
  }*/
  function safeDivide(x, y) {
    if (y == 0) {
      return 1;
    } else return x / y;
  }
  function calcWorkload(Tasks, CTasks, Tasks_tot, CTasks_tot, EmployeeNo) {
    var workload = 0;
    console.log(
      Tasks,
      Tasks_tot,
      safeDivide(Tasks, Tasks_tot),
      EmployeeNo,
      safeDivide(1, EmployeeNo),
      0.9 * safeDivide(1, EmployeeNo)
    );
    if (safeDivide(Tasks, Tasks_tot) < 0.9 * safeDivide(1, EmployeeNo)) {
      workload += 0.15;
    } else if (
      safeDivide(Tasks, Tasks_tot) <
      0.95 * safeDivide(1, EmployeeNo)
    ) {
      workload += 0.25;
    } else if (
      safeDivide(Tasks, Tasks_tot) <
      0.98 * safeDivide(1, EmployeeNo)
    ) {
      workload += 0.3;
    } else {
      workload += 0.4;
    }
    if (safeDivide(CTasks, CTasks_tot) < 0.91 * safeDivide(1, EmployeeNo)) {
      workload += 0.1;
    } else if (
      safeDivide(CTasks, CTasks_tot) <
      0.95 * safeDivide(1, EmployeeNo)
    ) {
      workload += 0.2;
    } else if (
      safeDivide(CTasks, CTasks_tot) <
      0.99 * safeDivide(1, EmployeeNo)
    ) {
      workload += 0.3;
    } else {
      workload += 0.6;
    }
    return workload;
  }

  function minof(x, y) {
    if (x < y) return x;
    return y;
  }

  function calcEfficiency(
    Tasks,
    CTasks,
    Tasks_onTime,
    CTasks_onTime,
    Workload
  ) {
    var eff = 0;
    eff += (Tasks_onTime / Tasks) * 0.35 + (CTasks_onTime / CTasks) * 0.65;
    if (Workload == "High") {
      return minof(1, eff + 0.13);
    } else if (Workload == "Medium") {
      return minof(1, eff + 0.06);
    } else {
      return eff;
    }
  }

  var EmployeeAnalysisData = [];
  var Tasks_tot = 0;
  var EmployeeNo = EmployeeData.length;
  var CTasks_tot = 0;
  for (var i = 0; i < EmployeeNo; i++) {
    Tasks_tot += parseInt(EmployeeData[i]["Tasks"]);
    CTasks_tot += parseInt(EmployeeData[i]["CTasks"]);
  }
  for (i = 0; i < EmployeeData.length; i++) {
    var obj = {};
    obj["Name"] = EmployeeData[i]["Name"];
    obj["Email"] = EmployeeData[i]["Email"];
    obj["Tasks"] = parseInt(EmployeeData[i]["Tasks"]);
    obj["CTasks"] = parseInt(EmployeeData[i]["CTasks"]);
    var workload = calcWorkload(
      obj["Tasks"],
      obj["CTasks"],
      Tasks_tot,
      CTasks_tot,
      EmployeeNo
    );
    if (workload > 0.98) obj["Workload"] = "High";
    else if (workload > 0.6) obj["Workload"] = "Medium";
    else obj["Workload"] = "Low";
    obj["Efficiency"] =
      (
        100 *
        calcEfficiency(
          obj["Tasks"],
          obj["CTasks"],
          EmployeeData[i]["Tasks_onTime"],
          EmployeeData[i]["CTasks_onTime"],
          obj["Workload"]
        )
      )
        .toFixed(2)
        .toString() + "%";
    console.log(obj, workload);
    EmployeeAnalysisData.push(obj);
  }
  return (
    <Container fluid id="EmployeeReport__container">
      <Navbar className="Common__navbar" bg="light" expand="lg">
        <Navbar.Brand>
          <img src={fopm_logo} className="Common__fopmlogo" />
        </Navbar.Brand>
        <BsFillPersonFill className="Common__profilelogo" />
      </Navbar>
      <h3 id="EmployeeReport__title">Employee Analysis Report</h3>
      <h4 id="EmployeeReport__subtitle">
        for The Software Engineering Project
      </h4>
      <table id="EmployeeReport__table">
        <tr>
          <th>Name</th>
          <th>Email</th>
          <th>No. of Tasks Assigned</th>
          <th>No. of Critical Tasks Assigned</th>
          <th>Workload</th>
          <th>Efficiency</th>
        </tr>
        {EmployeeAnalysisData.map((data, index) => {
          return (
            <tr key={index} className="EmployeeReport__table-row">
              <td>{data["Name"]}</td>
              <td>{data["Email"]}</td>
              <td>{data["Tasks"]}</td>
              <td>{data["CTasks"]}</td>
              <td>{data["Workload"]}</td>
              <td>{data["Efficiency"]}</td>
            </tr>
          );
        })}
      </table>
      <div id="EmployeeReport__btngroup">
        <Button variant="primary">Go Back</Button>
        <ExcelFile element={<Button variant="primary">Generate Excel</Button>}>
          <ExcelSheet
            data={EmployeeAnalysisData}
            name="Employee Analysis Report"
          >
            <ExcelColumn label="Name" value="Name" />
            <ExcelColumn label="Email" value="Email" />
            <ExcelColumn label="No. of Tasks Assigned" value="Tasks" />
            <ExcelColumn
              label="No. of Critical Tasks Assigned"
              value="CTasks"
            />
            <ExcelColumn label="Workload" value="Workload" />
            <ExcelColumn label="Efficiency" value="Efficiency" />
          </ExcelSheet>
        </ExcelFile>
      </div>
    </Container>
  );
}
