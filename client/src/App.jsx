import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomeScreen from "./Screens/HomeScreen.jsx/HomeScreen";
import Checkout from "./Screens/Checkout";
import LoginScreen from "./Screens/LoginScreen";
import RegisterScreen from "./Screens/RegisterScreen";
import ProfileScreen from "./Screens/ProfileScreen";

const App = () => {
  return (
    <div className="w-full h-screen grid md:flex grid-col justify-center md:justify-around items-center shadow-lg border-2 rounded-xl bg-gray-500">
      <Routes>
        <Route path="/" element={<HomeScreen />} />
        <Route path="/checkout/:id" element={<Checkout />} />
        <Route path="/login" element={<LoginScreen />} />
        <Route path="/signup" element={<RegisterScreen />} />
      </Routes>
    </div>
  );
};

export default App;
