import create from "zustand";

export const loginStore = create((set) => ({
  usernameInput: "",
  passwordInput: "",
  onSubmit: (e) => {
    e.preventDefault();
  },
  onChangeHandlerUser: (e) => {
    const data = e.target.value;
    set({ usernameData: data });
  },
  onChangeHandlerPass: (e) => {
    const data = e.target.value;
    set({ passwordData: data });
  },
  onClick: () => {
    console.log("Login Click")
  }
}));
