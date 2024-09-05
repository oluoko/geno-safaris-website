import React from "react";
import PcHomeImage from "../../assets/images/bg/pc home bg.jpg";
import vanDrawing from "../../assets/images/van.jpg";
import PhoneHomeImage from "../../assets/images/bg/phone home bg.jpg";
import { useLocation, useNavigate } from "react-router-dom";

const Home = () => {
  const location = useLocation();
  const insertName = "[Insert Name]";
  const getImageUrl = () => {
    // Get the window width
    const windowWidth =
      window.innerWidth ||
      document.documentElement.clientWidth ||
      document.body.clientWidth;

    // Define image URLs for different browsers and widths
    let imageUrl;
    if (windowWidth > 830) {
      imageUrl = PcHomeImage;
    } else {
      imageUrl = PhoneHomeImage;
    }

    return imageUrl;
  };
  return (
    <div id="home" className="screen w-11/12 md:w-5/6">
      {/* <img
        src={getImageUrl()}
        className="absolute top-0 left-0 bottom-0 right-0 w-screen -z-50 opacity-75"
        alt=""
      />
      <img
        src={vanDrawing}
        className="absolute top-0 left-1/2  bottom-0 right-0 w-screen -z-50 opacity-75"
        alt=""
      /> */}
      Home
    </div>
  );
};

export default Home;
