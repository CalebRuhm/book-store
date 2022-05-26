import create from "zustand";
import axios from "axios";

export const addBookStore = create((set) => ({
  selectData: "",
  selectResponse: [],
  deleteResponse: "",
  handleSelect: (e) => {
    set({
      selectData: e.target.value,
    });
  },
  handleSelectChange: async (selectData, bookId, token) => {
    if (selectData === "remove") {
      const deleteResponse = await axios(`/api/bookshelf/${bookId}`, {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      set({deleteResponse: deleteResponse.data});
    } else {
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
    }
  },
}));
