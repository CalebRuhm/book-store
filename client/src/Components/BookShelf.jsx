import "../Styles/BookShelf.scss";
import NavBar from "../Components/NavBar";
import { bookShelfStore } from "../Stores/bookShelfStore";
import { loginStore } from "../Stores/loginStore";
import { useTitle } from "../Components/useTitle";
import { useEffect } from "react";

export default function BookShelf() {
  useTitle(`Caleb's Book Store - Bookshelf`);

  const { onClick, response } = bookShelfStore((state) => state);
  const { token } = loginStore((state) => state);

  useEffect(() => {
    onClick(token);
  },[]);

  console.log(response);

  return (
    <>
      <NavBar />
      <div className="shelf">BookShelf</div>
    </>
  );
}
