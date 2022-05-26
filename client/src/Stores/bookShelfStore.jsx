import create from "zustand";
import axios from "axios";

export const bookShelfStore = create((set) => ({
  response: "",
  currentlyReading: [],
  wantToRead: [],
  read: [],
  onRender: async (token) => {
    const response = await axios(`/api/bookshelf`, {
      method: "GET",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    set({
      response: response.data.books,
    });
    set({currentlyReading: response.data.books.currentlyReading});
    set({wantToRead: response.data.books.wantToRead});
    set({read: response.data.books.read});
  },
}));
