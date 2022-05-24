import React from "react";
import Login from "./Login";
import BookShelf from "../Components/BookShelf";
import { loginStore } from "../Stores/loginStore";

export default function ProtectedRoute() {
  const { token } = loginStore((state) => state);
  return token ? <BookShelf /> : <Login />;
}
