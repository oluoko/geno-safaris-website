import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";

import AdminRoute from "./Components/Routes/AdminRoute";
import PrivateRoute from "./Components/Routes/PrivateRoute";

import HomeScreen from "./Screens/HomeScreen.jsx/HomeScreen";
import Checkout from "./Screens/Checkout";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";

import AdminDashboard from "./Screens/AdminDashboard/AdminDashboard";

import { ScreenSizeProvider } from "./Components/ScreenSizeContext";

const App = () => {
  // grid md:flex grid-col justify-center md:justify-around items-center
  return (
    <ScreenSizeProvider>
      <Router>
        <div className="w-full h-screen overflow-y-scroll overflow-x-hidden">
          <Routes>
            <Route path="/" element={<HomeScreen />} />
            <Route path="/checkout/:id" element={<Checkout />} />
            <Route path="/login" element={<LoginScreen />} />
            <Route path="/signup" element={<RegisterScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
            <Route path="/admin-dashboard" element={<AdminDashboard />} />
          </Routes>
        </div>
      </Router>
    </ScreenSizeProvider>
  );
};

export default App;
