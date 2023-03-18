import "./App.css";
// import Login from "./components/Pages/Login/Login";
// import SignUp from "./components/Pages/SignUp/SignUp";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Header from "./components/Header/Header.jsx";
import Row from "react-bootstrap/esm/Row";
import History from "./components/Pages/History/History.jsx";
import Col from "react-bootstrap/Col";
import Entry from "./components/Pages/Entry/Entry";

function App() {
  return (
    <>
      <Header />
      <Row>
        <Col lg={2}>
          <NavigationBar />
        </Col>
        <Col ld={12}>
          <History />
        </Col>
      </Row>
    </>
  );
}

export default App;
