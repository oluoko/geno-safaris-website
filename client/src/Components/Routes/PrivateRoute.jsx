import { Navigate, Outlet, useLocation } from "react-router-dom";

const PrivateRoute = () => {
  const userData = localStorage.getItem("userData");
  const location = useLocation();

  return userData ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login?redirect=${location.pathname}${location.search}`}
      replace
    />
  );
};

export default PrivateRoute;
