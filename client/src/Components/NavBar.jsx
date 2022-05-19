import "../Styles/NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBook } from "@fortawesome/free-solid-svg-icons";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="container">
        <button className="bookShelf">
          <FontAwesomeIcon icon={faBook} className="bookIcon" />
          My Bookshelf
        </button>
        <button className="search">
          Search
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </div>
    </div>
  );
}
