import "../Styles/Search.scss";
import NavBar from "../Components/NavBar";
import { useTitle } from "../Components/useTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchStore } from "../Stores/searchStore";
import { Link, useLocation } from "react-router-dom";

export default function Search() {
  useTitle(`Caleb's Book Store - Search`);
  const { handleSearch, handleChange, searchData, response } = searchStore(
    (state) => state
  );

  const data = response;
  console.log(data);
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
        {data &&
          data.map((newData, idx) => (
            <div key={newData.id} className="book">
              {newData.imageLinks && (
                <img
                  src={newData.imageLinks.thumbnail}
                  alt={newData.title}
                ></img>
              )}

              <div className="bookInfo">
                <Link className="title" to="/book/:bookId">
                  {newData.title}
                </Link>
                <h2 className="subtitle">{newData.subtitle}</h2>
                <p className="author">{newData.authors}</p>
                <p className="desc">{newData.description}</p>
                <form onSubmit={null}>
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    value={newData.shelf}
                    onChange={null}
                  >
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                  </select>
                </form>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
