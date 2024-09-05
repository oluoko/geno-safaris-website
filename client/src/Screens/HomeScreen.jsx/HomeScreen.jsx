import React, { useState } from "react";
import Navbar from "../../Components/Navbar";
import Home from "./Home";
import About from "./About";
import Service from "./Service";
import Contact from "./Contact";

const HomeScreen = () => {
  // const [screenSize, setScreenSize] = useState("");

  // if (window.innerWidth <= 768) {
  //   setScreenSize("small");
  // } else {
  //   setScreenSize("big");
  // }
  return (
    <div className="main-screen w-full mt-44 md:mt-58 flex flex-col justify-center items-center ">
      <Navbar />
      <Home />
      <About />
      <Service />
      <Contact />
    </div>
  );
};

export default HomeScreen;
