import "./App.css";
import Login from "./components/Login";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Header from "./components/Header/Header.jsx";
import Entry from "./components/Pages/Entry";
import Row from "react-bootstrap/esm/Row";

import Col from "react-bootstrap/Col";

function App() {
  return (
    <>
      {/* <Login /> */}
      <Header />
      <Row>
        <Col lg={2} className="NavBar-Element">
          <NavigationBar />
        </Col>
        <Col lg={10} className="NavBar-Element pt-3">
          <Entry />
        </Col>
      </Row>
    </>
  );
}

export default App;
