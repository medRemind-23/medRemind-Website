import React, { useContext } from "react";
import "./NavigationBar.css";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Stack from "react-bootstrap/Stack";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import { Form } from "react-bootstrap";
import { AuthContext } from "../authProvider";

function NavigationBar() {
  const { SignOut } = useContext(AuthContext);
  return (
    <>
      <Stack gap={3} className="Nav-Container p-4 ">
        <div className="Nav-Container-items">
          <Col className=" active ">
            <Link to="/">DashBoard</Link>
          </Col>
          <Col>
            <Link to="/Entry">Entry</Link>
          </Col>
          <Col>
            {" "}
            <Link to="/History">My Entry</Link>
          </Col>

          <Col>
            <button onClick={SignOut}> SignOut</button>
          </Col>
        </div>
      </Stack>
    </>
  );
}

export default NavigationBar;
