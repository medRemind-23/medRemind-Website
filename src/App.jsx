import "./App.css";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Header from "./components/Header/Header.jsx";
import Row from "react-bootstrap/esm/Row";
import History from "./components/History/History";
import Col from "react-bootstrap/Col";
import Entry from "./components/Pages/Entry/Entry";

function App() {
  return (
    <>
      <Login />
      {/* <Header />
      <Row>
        <Col lg={2} className="NavBar-Element">
          <NavigationBar />
        </Col>
        <Col lg={10} className="NavBar-Element pt-3">
          <Entry />
        </Col>
      </Row> */}
      {/* <History /> */}
    </>
  );
}

export default App;
