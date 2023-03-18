import React from "react";
import { Route, Routes } from "react-router-dom";

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
