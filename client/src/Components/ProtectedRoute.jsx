import React from "react";
import { Outlet } from "react-router-dom";
import Login from "./Login";
const useAuth = () => {
  const user = { loggedIn: false };
  return user && user.loggedIn;
};

export default function ProtectedRoute() {
  const isAuth = useAuth();
  return isAuth ? <Outlet /> : <Login />
}
