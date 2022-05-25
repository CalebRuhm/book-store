import "../Styles/Login.scss";
import React from "react";
import { loginStore } from "../Stores/loginStore";
import BookShelf from "../Components/BookShelf";
import { useTitle } from "../Components/useTitle";

export default function Login() {
  useTitle(`Caleb's Book Store - Login`)

  const {
    onSubmit,
    onChangeHandlerUser,
    onChangeHandlerPass,
    onClick,
    usernameInput,
    passwordInput,
    token,
  } = loginStore((state) => state);

  return token ? (
    <BookShelf />
  ) : (
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
