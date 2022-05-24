import "../Styles/Search.scss";
import NavBar from "../Components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBook } from "@fortawesome/free-solid-svg-icons";
import { searchStore } from "../Stores/searchStore";

export default function Search() {
  return (
    <>
      <NavBar />
      <div className="searchBar">
        <button className="search">
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
        <label htmlFor="Search" />
        <input
          type="text"
          name="search"
          placeholder="Harry Potter and the Prisoner of Azkaban"
        ></input>
      </div>
      <div className="results">
        Results
      </div>
    </>
  );
}
