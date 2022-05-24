import create from "zustand";
import axios from "axios";

export const loginStore = create((set) => ({
  token: "",
  usernameInput: "",
  passwordInput: "",
  onSubmit: (e) => {
    e.preventDefault();
  },
  onChangeHandlerUser: (e) => {
    set({ usernameInput: e.target.value });
  },
  onChangeHandlerPass: (e) => {
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
