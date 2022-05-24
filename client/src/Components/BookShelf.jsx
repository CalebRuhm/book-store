import "../Styles/BookShelf.scss";
import NavBar from "../Components/NavBar";
import { bookStore } from "../Stores/bookStore";

export default function BookShelf() {

  const {} = bookStore((state) => state)

  return (
    <>
      <NavBar />
      <div className="shelf">BookShelf</div>
    </>
  );
}
