import "../Styles/Search.scss";
import NavBar from "../Components/NavBar";
import { useTitle } from "../Components/useTitle";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { searchStore } from "../Stores/searchStore";
import { addBookStore } from "../Stores/addBookStore";
import {loginStore} from "../Stores/loginStore";
import { Link, useLocation } from "react-router-dom";

export default function Search() {
  useTitle(`Caleb's Book Store - Search`);
  const { handleSearch, handleChange, searchData, response } = searchStore(
    (state) => state
  );
  const data = response;

  const { selectData, selectResponse, handleSelect, handleSelectChange } =
    addBookStore((state) => state);

  const { token } = loginStore((state) => state);

  console.log(selectData);
  console.log(selectResponse);

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
                <Link
                  className="title"
                  to={{ pathname: `/book/${newData.id}` }}
                >
                  {newData.title}
                </Link>
                <h2 className="subtitle">{newData.subtitle}</h2>
                {newData.authors && (
                  <div className="authors">
                    {newData.authors.map((newAuthor, idx) => (
                      <p key={idx}>{newAuthor}</p>
                    ))}
                  </div>
                )}
                <p className="desc">{newData.description}</p>
                <form onChange={() => handleSelectChange(selectData, newData.id, token)}>
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    value={newData.shelf}
                    onChange={(e) => handleSelect(e)}
                  >
                    <option value="none">None</option>
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
