import create from "zustand";
import axios from "axios";

export const addBookStore = create((set) => ({
  changeData: "",
  remove: "",
  handleSubmit: (e) => {
    e.preventDefault();
  },
  handleChange: async (e, id, token) => {
    if (e.target.value === "remove") {
      const response = await axios(`/api/bookshelf/${id}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      set({ remove: response });
    } else {
      await axios(`/api/bookshelf/${id}/${e.target.value}`, {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({
        changeData: e.target.value,
      });
    }
  },
}));
