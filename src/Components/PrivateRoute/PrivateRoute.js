import React from "react";
import { Navigate, Outlet } from "react-router-dom";

function PrivateRoute(props) {
  const auth = localStorage.getItem("user");
  return <div>{auth ? <Outlet></Outlet> : <Navigate to="/register" />}</div>;
}

export default PrivateRoute;
