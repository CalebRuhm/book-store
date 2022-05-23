import "../Styles/PageNotFound.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="container">
      <h1>Sorry, the page `"{location.pathname}"` doesn't exist</h1>
      <Link to="/">Back to Login</Link>
    </div>
  );
}
