import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Work from "../components/Work";

function AppRouter() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/work" exact element={<Work />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
