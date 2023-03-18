import React from "react";
x;
import { Route, Routes } from "react-router-dom";
import { Dashboard } from "";
import { Entry } from "";
import { MyEnteries } from "";

function router() {
  return (
    <Routes>
      <Route path="/" element={<Dashboard />} />
      <Route path="/" element={<Entry />} />
      <Route path="/" element={<MyEnteries />} />
    </Routes>
  );
}

export default router;
