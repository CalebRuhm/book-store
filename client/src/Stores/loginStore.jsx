import create from "zustand";
import axios from "axios";

export const loginStore = create((set) => ({
  token: "",
  usernameInput: "",
  passwordInput: "",
  blurUser: false,
  blurPass: false,
  validate: false,
  loginValidate: false,
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
    if (!usernameInput && !passwordInput) {
      set({ validate: true });
    } else {
      try {
        set({ validate: false });
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
      } catch (error){
        set({loginValidate: true});
      }
    }
  },
  onBlurUser: (usernameInput) => {
    if (!usernameInput) {
      set({ blurUser: true });
    } else {
      set({ blurUser: false });
    }
  },
  onBlurPass: (passwordInput) => {
    if (!passwordInput) {
      set({ blurPass: true });
    } else {
      set({ blurPass: false });
    }
  },
}));
