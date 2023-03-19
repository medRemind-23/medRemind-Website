import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import "./Dashboard.css";
import { FaUser } from "react-icons/fa";

function Dashboard() {
  return (
    <>
      <Row>
        <Col>
          <Card>
            <Card.Body
              className="DashBoard-Card"
              style={{ backgroundColor: "#329DFF" }}
            >
              <h1>
                <FaUser />
              </h1>
              <h2>Total Patients:</h2>
              <h2>--</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body
              className="DashBoard-Card"
              style={{ backgroundColor: "#1EBFC4" }}
            >
              <h1>
                <FaUser />
              </h1>
              <h2>Total Entry:</h2>
              <h2>--</h2>
            </Card.Body>
          </Card>
        </Col>
        <Col>
          <Card>
            <Card.Body
              className="DashBoard-Card"
              style={{ backgroundColor: "#3DC86C" }}
            >
              <h1>
                <FaUser />
              </h1>
              <h2>Total Hearts Earned: </h2>
              <h2>--</h2>
            </Card.Body>
          </Card>
        </Col>
      </Row>
    </>
  );
}

export default Dashboard;
