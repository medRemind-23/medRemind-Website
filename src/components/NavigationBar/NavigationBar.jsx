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
        <Col className="Nav-items active ">Dashboard</Col>
        <Col className="Nav-items ">Entry</Col>
        <Col className="Nav-items ">My Entries</Col>
      </Stack>
    </>
  );
}

export default NavigationBar;
