import create from "zustand";
import axios from "axios";

export const bookShelfStore = create((set) => ({
  response: "",
  onClick: async (newToken) => {
    const response = await axios(`/api/bookshelf`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${newToken}`,
      },
    });
    set({
      response: response.data.books,
    });
  },
}));
