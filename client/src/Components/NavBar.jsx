import "../Styles/NavBar.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBook } from "@fortawesome/free-solid-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();

  return (
    <div className="navbar">
      <div className="container">
        <button
          className="bookShelf"
          onClick={() => {
            navigate("/book-shelf");
          }}
        >
          <FontAwesomeIcon icon={faBook} className="bookIcon" />
          Bookshelf
        </button>
        <button className="search" onClick={() => navigate("/search")}>
          Search
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
      </div>
    </div>
  );
}
