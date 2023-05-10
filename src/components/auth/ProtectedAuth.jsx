import { useSelector } from "react-redux";
import { Navigate, Outlet } from "react-router-dom";

export const ProtectedAuth = () => {
  const { token } = useSelector((store) => store.userInfo);
  return <>{token ? <Outlet /> : <Navigate to="/login" />}</>;
};
