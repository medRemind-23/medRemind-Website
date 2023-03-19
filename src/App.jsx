import "./App.css";
// import Login from "./components/Pages/Login/Login";
// import SignUp from "./components/Pages/SignUp/SignUp";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Header from "./components/Header/Header.jsx";
import Row from "react-bootstrap/esm/Row";
import Col from "react-bootstrap/Col";
import AuthProvider from "./components/authProvider";
import Router from "./components/router/Router";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
function App() {
  return (
    <>
      <AuthProvider>
        <Header />
        <Row>
          <Col lg={2}>
            <NavigationBar />
          </Col>
          <Col ld={12}>
            <Router />
          </Col>
        </Row>
      </AuthProvider>
    </>
  );
}

export default App;
