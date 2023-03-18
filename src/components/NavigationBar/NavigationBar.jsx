import React from "react";
import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";

function NavigationBar() {
  return (
    <>
      <Stack gap={3} className="p-5">
        <Col className="Nav-items active " lg="2">
          Dashboard
        </Col>
        <Col className="Nav-items " lg="2" mp="5px">
          Entry
        </Col>
        <Col className="Nav-items " lg="2" mp="5px">
          My Entries
        </Col>
      </Stack>
    </>
  );
}

export default NavigationBar;
