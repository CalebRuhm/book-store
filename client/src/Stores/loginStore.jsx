import create from "zustand";

export const loginStore = create((set) => ({
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
  onClick: () => {
    console.log("Login Click");
  },
}));
