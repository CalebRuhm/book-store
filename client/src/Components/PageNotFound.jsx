import "../Styles/PageNotFound.scss";
import React from "react";
import { Link, useLocation } from "react-router-dom";
import sad from "../img/sad.png";

export default function PageNotFound() {
  const location = useLocation();

  return (
    <div className="container">
      <div className="info">
        <h1>Sorry! The page '{location.pathname} ' doesn't exist.</h1>
        <Link className="link" to="/">
          Back to Login
        </Link>
        <img src={sad} alt="" className="img" />
      </div>
    </div>
  );
}
