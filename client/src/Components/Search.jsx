import "../Styles/Search.scss";
import NavBar from "../Components/NavBar";
import { useTitle } from "../Components/useTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchStore } from "../Stores/searchStore";

export default function Search() {
  useTitle(`Caleb's Book Store - Search`);
  const { handleSearch, handleChange, searchData, response } = searchStore(
    (state) => state
  );

  const data = response;
  console.log(data);

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

      <div className="results"></div>
    </>
  );
}
