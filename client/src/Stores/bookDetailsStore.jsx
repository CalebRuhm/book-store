import create from "zustand";
import axios from "axios";

export const bookDetailsStore = create((set) => ({
response: "",
onRender: async (token, bookId) => {
  const response = await axios(`/api/book/${bookId}`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  });
  set({ response: response.data.book });
}

}));