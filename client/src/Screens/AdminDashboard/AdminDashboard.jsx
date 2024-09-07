import React, { useEffect } from "react";
import { Routes, Route, useLocation } from "react-router-dom";
import ThemeProvider from "./utils/ThemeContext";

import "./css/style.css";

import "./charts/ChartjsConfig";

// Import pages
import Dashboard from "./pages/Dashboard";

const AdminDashboard = () => {
  const location = useLocation();

  useEffect(() => {
    document.querySelector("html").style.scrollBehavior = "auto";
    window.scroll({ top: 0 });
    document.querySelector("html").style.scrollBehavior = "";
  }, [location.pathname]); // triggered on route change
  return (
    <ThemeProvider>
      <Routes>
        <Route exact path="/" element={<Dashboard />} />
      </Routes>
    </ThemeProvider>
  );
};

export default AdminDashboard;
