import "../Styles/Search.scss";
import NavBar from "../Components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBook } from "@fortawesome/free-solid-svg-icons";
import { searchStore } from "../Stores/searchStore";

export default function Search() {
  const { handleSearch, handleChange, searchData, response } =
    searchStore((state) => state);
  console.log(response);
  return (
    <>
      <NavBar />
      <div className="searchBar">
        <button className="search" onClick={() => handleSearch(searchData)}>
          <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon" />
        </button>
        <label htmlFor="Search" />
        <input
          type="text"
          name="search"
          onChange={(e) => handleChange(e)}
          placeholder="Harry Potter and the Prisoner of Azkaban"
        ></input>
      </div>
      <div className="results">
        Results
      </div>
    </>
  );
}
