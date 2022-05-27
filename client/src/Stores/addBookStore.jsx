import create from "zustand";
import axios from "axios";

export const addBookStore = create((set) => ({
  changeData: "",
  handleSubmit: (e) => {
    e.preventDefault();
  },
  handleChange: async (e, id, token) => {
    const changeResponse = await axios(`/api/bookshelf/${id}/${e.target.value}`, {
      method: "PUT",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    })
    set({
      changeData: e.target.value,
    });
  },
}));
