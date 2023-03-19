import React, { useContext } from "react";
import "./App.css";
// import Login from "./components/Pages/Login/Login";
// import SignUp from "./components/Pages/SignUp/SignUp";

import AuthProvider, { AuthContext } from "./components/authProvider";
import Router from "./components/router/Router";
import Login from "./components/Pages/Login/Login";
import Header from "./components/Header/Header";
import Nav from "./components/Nav";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import SignUp from "./components/Pages/SignUp/SignUp";
import NavigationBar from "./components/NavigationBar/NavigationBar";
import { Col, Row } from "react-bootstrap";

function App() {
  return (
    <AuthProvider>
      <Login />
      <Header />
      <Row>
        <Col ig={2}>
          <NavigationBar />
        </Col>
        <Col ld={12}>
          <Router />
        </Col>
      </Row>
    </AuthProvider>
  );
}

export default App;
