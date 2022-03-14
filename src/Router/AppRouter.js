import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import About from "../components/About";
import NavBar from "../components/NavBar";
import Work from "../components/Work";
import Contact from "../components/Contact";

function AppRouter() {
  return (
    <div>
      <Router>
        <NavBar />
        <Routes>
          <Route path="/" exact element={<About />} />
          <Route path="/work" exact element={<Work />} />
          <Route path="/contact" exact element={<Contact />} />
        </Routes>
      </Router>
    </div>
  );
}

export default AppRouter;
