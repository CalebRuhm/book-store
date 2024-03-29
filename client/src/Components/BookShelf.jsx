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

  const { onRender, currentlyReading, wantToRead, read } = bookShelfStore(
    (state) => state
  );
  const { token } = loginStore((state) => state);
  const { handleSubmit, handleChange, changeData, remove } = addBookStore(
    (state) => state
  );

  useEffect(() => {
    onRender(token);
  }, [onRender, token, changeData, remove]);

  return (
    <>
      <NavBar />
      <div className="currentlyReading">
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
                <form onSubmit={(e) => handleSubmit(e)}>
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    onChange={(e) => handleChange(e, newData.id, token)}
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
                <form onSubmit={(e) => handleSubmit(e)}>
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    onChange={(e) => handleChange(e, newData.id, token)}
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
                <form onSubmit={(e) => handleSubmit(e)}>
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    onChange={(e) => handleChange(e, newData.id, token)}
                    value={newData.shelf}
                  >
                    <option value="currentlyReading">Currently Reading</option>
                    <option value="wantToRead">Want to Read</option>
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
