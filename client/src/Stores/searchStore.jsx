import create from "zustand";
import axios from "axios";

export const searchStore = create((set) => ({
  searchData: "",
  response: [],
  handleSearchChange: (e) => {
    set({ searchData: e.target.value });
  },
  handleSearch: async (searchData) => {
    const response = await axios(`/api/book/search/${searchData}`, {
      method: "GET",
    });
    set({
      response: response.data.books,
    });
  },
}));
