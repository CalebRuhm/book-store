import "../Styles/BookShelf.scss";
import NavBar from "../Components/NavBar";
import { bookStore } from "../Stores/bookStore";
import { useTitle } from "../Components/useTitle";

export default function BookShelf() {
  useTitle(`Caleb's Book Store - Bookshelf`);

  const {} = bookStore((state) => state);

  return (
    <>
      <NavBar />
      <div className="shelf">BookShelf</div>
    </>
  );
}
