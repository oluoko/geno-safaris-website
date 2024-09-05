import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import { useState } from "react";
import HomeScreen from "./Screens/HomeScreen.jsx/HomeScreen";
import Checkout from "./Screens/Checkout";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const App = () => {
  return (
    <Router>
      <div className="w-full h-screen grid md:flex grid-col justify-center md:justify-around items-center">
        <Routes>
          <Route path="/" element={<HomeScreen />} />
          <Route path="/checkout/:id" element={<Checkout />} />
          <Route path="/login" element={<LoginScreen />} />
          <Route path="/signup" element={<RegisterScreen />} />
          <Route path="/profile" element={<ProfileScreen />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
