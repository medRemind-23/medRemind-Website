import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "../Pages/Dashboard/Dashboard";
import Entry from "../Pages/Entry/Entry";
// import MyEnteries from "../Pages/History";
function Router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/Entry" element={<Entry />} />
      {/* <Route path="/MyEnteries" element={<MyEnteries />} /> */}
    </Routes>
  );
}

export default Router;
