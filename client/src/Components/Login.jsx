import "../Styles/Login.scss";
import React from "react";

export default function Login() {
  const onSubmit = (e) => {
    e.preventDefault();
  };

  return (
    <div className="login">
      <form
        className="form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="username">Username:</label>
        <input type="text" name="username"></input>
        <label htmlFor="password">Password:</label>
        <input type="password" name="password"></input>
      </form>
      <button className="btn">Login</button>
    </div>
  );
}
