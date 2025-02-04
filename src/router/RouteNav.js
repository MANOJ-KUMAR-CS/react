import React from "react";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

const RouteComponent = () => {
  return (
    <BrowserRouter>
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
      <Routes>
              <Route path="/" element={<h1>Home Page</h1>} />
              <Route path="/about" element={ <h2>About Us</h2>} />
      </Routes>
    </BrowserRouter>
  );
};

export default RouteComponent;
