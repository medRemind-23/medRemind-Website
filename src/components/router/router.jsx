import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Entry from "../Pages/Entry/Entry";
import History from "../Pages/History/History";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Entry" element={<Entry />} />
      <Route path="/History" element={<History />} />
    </Routes>
  );
}

export default Router;
