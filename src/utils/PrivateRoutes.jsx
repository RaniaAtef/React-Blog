import React from "react";
import { Navigate, Outlet } from "react-router-dom";
const PrivateRoutes = () => {
  const authorized = localStorage.getItem("token");
  return <>{authorized ? <Outlet /> : <Navigate to="/register" />}</>;
};

export default PrivateRoutes;
