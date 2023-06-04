import { useLocation, Navigate, Outlet } from "react-router-dom";

const RequiredAuth = () => {
  const token = localStorage.getItem("token");
  const location = useLocation();
  console.log(token);
  return token ? <Outlet /> : <Navigate to="/" />;
};
export default RequiredAuth;
