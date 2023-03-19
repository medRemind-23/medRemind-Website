import React, { useContext } from "react";
import "./App.css";
// import Login from "./components/Pages/Login/Login";
// import SignUp from "./components/Pages/SignUp/SignUp";

import AuthProvider, { AuthContext } from "./components/authProvider";
import Router from "./components/router/Router";
import Login from "./components/Pages/Login/Login";
import Nav from "./components/Nav";
import Dashboard from "./components/Pages/Dashboard/Dashboard";
import SignUp from "./components/Pages/SignUp/SignUp";

function App() {
  return (
    <AuthProvider>
      <Login />
    </AuthProvider>
  );
}

export default App;
