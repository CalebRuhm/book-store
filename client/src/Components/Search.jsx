import "../Styles/Search.scss";
import NavBar from "../Components/NavBar";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass, faBook } from "@fortawesome/free-solid-svg-icons";
import { searchStore } from "../Stores/searchStore";

export default function Search() {
  const { handleSearch, handleChange, searchData, response } = searchStore(
    (state) => state
  );

  const books = response;

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
        {books.map((bookInfo, idx) => {
          return (
            <div className="bookInfo" key={bookInfo.id}>
              <h1>{bookInfo}</h1>
              <p>{idx}</p>
            </div>
          );
        })}
      </div>
    </>
  );
}
