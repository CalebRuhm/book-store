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
      {data &&
        data.map((newData, idx) => (
          <div key={newData.id} className="book">
            <img
              src={newData.imageLinks.thumbnail}
              alt={newData.imageLinks.thumbnail}
            ></img>
            <div className="bookInfo">
              <h1 className="title">{newData.title}</h1>
              <h2 className="title">{newData.subtitle}</h2>
              <p className="author">{newData.authors}</p>
              <p className="desc">{newData.description}</p>
              <p>{newData.id}</p>
            </div>
          </div>
        ))}
    </>
  );
}
