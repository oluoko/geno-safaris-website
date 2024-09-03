import { Navigate, Outlet, useLocation } from "react-router-dom";

const AdminRoute = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const location = useLocation();

  return userData && userData.isAdmin ? (
    <Outlet />
  ) : (
    <Navigate
      to={`/login?redirect=${location.pathname}${location.search}`}
      replace
    />
  );
};

export default AdminRoute;
