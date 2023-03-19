import React, { useContext } from "react";
import "./App.css";
// import Login from "./components/Pages/Login/Login";
// import SignUp from "./components/Pages/SignUp/SignUp";

import AuthProvider, { AuthContext } from "./components/authProvider";
import Router from "./components/router/Router";
import Login from "./components/Pages/Login/Login";

function App() {
  const { auth } = useContext(AuthContext);
  console.log(auth.currentUser);
  if (auth.currentUser) {
    return (
      <AuthProvider>
        <Router />
      </AuthProvider>
    );
  } else {
    return (
      <>
        <AuthProvider>
          <Login />
        </AuthProvider>
      </>
    );
  }
}

export default App;
