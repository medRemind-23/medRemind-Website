import React from "react";
import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";

function NavigationBar() {
  return (
    <>
      <Stack gap={3} className="Nav-Container p-4 ">
        <div className="Nav-Container-items">
          <Col className=" active ">Dashboard</Col>
          <Col>Entry</Col>
          <Col>My Entries</Col>
        </div>
      </Stack>
    </>
  );
}

export default NavigationBar;
