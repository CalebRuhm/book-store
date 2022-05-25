import create from "zustand";
import axios from "axios";

export const loginStore = create((set) => ({
  token: "",
  usernameInput: "",
  passwordInput: "",
  onSubmit: (e) => {
    e.preventDefault();
  },
  onChangeUser: (e) => {
    set({ usernameInput: e.target.value });
  },
  onChangePass: (e) => {
    set({ passwordInput: e.target.value });
  },
  onClick: async (usernameInput, passwordInput) => {
    const response = await axios("/api/signin", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      data: {
        username: usernameInput,
        password: passwordInput,
      },
    });
    set({ token: response.data.token });
    const newToken = response.data.token;
    localStorage.setItem("token", newToken);
  },
}));
