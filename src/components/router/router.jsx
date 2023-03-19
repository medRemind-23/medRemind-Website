import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Entry from "../Pages/Entry/Entry";
import History from "../Pages/History/History";
import Login from "../Pages/Login/Login";
import SignUp from "../Pages/SignUp/SignUp";
function Router() {
  const login = () => {
    <Routes>
      <Route path="/" element={<Login />} />
      <Route path="/Signup" element={<SignUp />} />
    </Routes>;
  };

  const others = () => {
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Entry" element={<Entry />} />
      <Route path="/History" element={<History />} />
    </Routes>;
  };
}

export default Router;
