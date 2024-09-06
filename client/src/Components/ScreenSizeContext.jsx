import React, { createContext, useState, useEffect } from "react";

// Create the context
export const ScreenSizeContext = createContext();

// Create a provider component
export const ScreenSizeProvider = ({ children }) => {
  const [screenSize, setScreenSize] = useState(
    window.innerWidth <= 768 ? "small" : "big"
  );

  // Add a resize event listener to update the screenSize when the window resizes
  useEffect(() => {
    const handleResize = () => {
      setScreenSize(window.innerWidth <= 768 ? "small" : "big");
    };

    window.addEventListener("resize", handleResize);

    // Clean up the event listener on component unmount
    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <ScreenSizeContext.Provider value={screenSize}>
      {children}
    </ScreenSizeContext.Provider>
  );
};
