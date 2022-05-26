import "../Styles/BookShelf.scss";
import NavBar from "../Components/NavBar";
import { bookShelfStore } from "../Stores/bookShelfStore";
import { loginStore } from "../Stores/loginStore";
import { useTitle } from "../Components/useTitle";
import { addBookStore } from "../Stores/addBookStore";
import { useEffect } from "react";
import { Link } from "react-router-dom";

export default function BookShelf() {
  useTitle(`Caleb's Book Store - Bookshelf`);

  const { onRender, response, currentlyReading, wantToRead, read } =
    bookShelfStore((state) => state);
  const { token } = loginStore((state) => state);
  const {
    selectData,
    selectResponse,
    deleteResponse,
    handleSelect,
    handleSelectChange,
  } = addBookStore((state) => state);

  useEffect(() => {
    onRender(token);
  }, [onRender, token]);

  console.log(selectData);
  console.log(selectResponse);
  console.log(deleteResponse);

  return (
    <>
      <NavBar />
      <div className="currentlyReading">
        <h1>Currently Reading:</h1>
        {currentlyReading &&
          currentlyReading.map((newData, idx) => (
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
                <form
                  onChange={() =>
                    handleSelectChange(selectData, newData.id, token)
                  }
                >
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    onChange={(e) => handleSelect(e)}
                    value={newData.shelf}
                  >
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="remove">Remove</option>
                  </select>
                </form>
              </div>
            </div>
          ))}
      </div>
      <div className="wantToRead">
        <h1>Want to Read:</h1>
        {wantToRead &&
          wantToRead.map((newData, idx) => (
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
                <form
                  onChange={() =>
                    handleSelectChange(selectData, newData.id, token)
                  }
                >
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    onChange={(e) => handleSelect(e)}
                    value={newData.shelf}
                  >
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="remove">Remove</option>
                  </select>
                </form>
              </div>
            </div>
          ))}
      </div>
      <div className="read">
        <h1>Read:</h1>
        {read &&
          read.map((newData, idx) => (
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
                <form
                  onChange={() =>
                    handleSelectChange(selectData, newData.id, token)
                  }
                >
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    onChange={(e) => handleSelect(e)}
                    value={newData.shelf}
                  >
                    <option value="wantToRead">Want to Read</option>
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="read">Read</option>
                    <option value="remove">Remove</option>
                  </select>
                </form>
              </div>
            </div>
          ))}
      </div>
    </>
  );
}
