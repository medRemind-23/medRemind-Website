import "./App.css";
import Login from "./components/Pages/Login/Login";
import SignUp from "./components/Pages/SignUp/SignUp";
import NavigationBar from "./components/NavigationBar/NavigationBar.jsx";
import Header from "./components/Header/Header.jsx";
import Row from "react-bootstrap/esm/Row";
import History from "./components/History/History";
import Col from "react-bootstrap/Col";
import Entry from "./components/Pages/Entry/Entry";
import AuthProvider from "./components/authProvider";
import Router from "./components/router/Router";
function App() {
  return (
    <AuthProvider>
      <Router />
    </AuthProvider>
  );
}

export default App;
