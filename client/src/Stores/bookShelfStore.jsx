import create from "zustand";
import axios from "axios";

export const bookShelfStore = create((set) => ({
  response: "",
  currentlyReading: [],
  wantToRead: [],
  read: [],
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
    set({currentlyReading: response.data.books.currentlyReading});
    set({wantToRead: response.data.books.wantToRead});
    set({read: response.data.books.read});
  },
}));
