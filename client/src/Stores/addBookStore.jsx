import create from "zustand";
import axios from "axios";

export const addBookStore = create((set) => ({
  selectData: "",
  selectResponse: [],
  handleSelect: (e, selectData, bookId, token) => {
    set({
      selectData: e.target.value,
    });
  },
  handleSelectChange: async (selectData, bookId, token) => {
    const selectResponse = await axios(
      `/api/bookshelf/${bookId}/${selectData}`,
      {
        method: "PUT",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    set({
      selectResponse: selectResponse.data,
    });
  },
}));
