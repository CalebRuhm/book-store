import "../Styles/Login.scss";
import React from "react";
import { loginStore } from "../Stores/loginStore";

export default function Login() {
  const {
    onSubmit,
    onChangeHandlerUser,
    onChangeHandlerPass,
    onClick,
    usernameInput,
    passwordInput,
    token
  } = loginStore((state) => state);

  console.log(token);

  return (
    <div className="login">
      <form
        className="form"
        onSubmit={(e) => {
          onSubmit(e);
        }}
      >
        <label htmlFor="username">Username:</label>
        <input
          type="text"
          name="username"
          onChange={(e) => onChangeHandlerUser(e)}
        ></input>
        <label htmlFor="password">Password:</label>
        <input
          type="password"
          name="password"
          onChange={(e) => onChangeHandlerPass(e)}
        ></input>
      </form>
      <button
        className="btn"
        onClick={() => onClick(usernameInput, passwordInput)}
      >
        Login
      </button>
    </div>
  );
}
