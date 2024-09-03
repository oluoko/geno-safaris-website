import { useEffect } from "react";
import { useNavigate, useLocation } from "react-router-dom";

const Back = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const userData = JSON.parse(localStorage.getItem("userData"));

  useEffect(() => {
    // Store the current path before redirecting to login or register
    if (
      !userData &&
      location.pathname !== "/login" &&
      location.pathname !== "/register"
    ) {
      localStorage.setItem("lastPage", location.pathname);
    }
  }, [location, userData]);

  const handleBack = () => {
    const lastPage = localStorage.getItem("lastPage");

    // Navigate to the last page or home if lastPage is not available
    if (userData && lastPage) {
      navigate(lastPage);
      localStorage.removeItem("lastPage"); // Clear lastPage after navigating
    } else {
      navigate("/"); // Redirect to home if no user is logged in
    }
  };

  return (
    <button
      onClick={handleBack}
      className="button fixed top-2 left-2 font-bold py-2 px-4 rounded text-xl focus:outline-none focus:shadow-outline"
    >
      Back
    </button>
  );
};

export default Back;
