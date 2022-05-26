import "../Styles/BookShelf.scss";
import NavBar from "../Components/NavBar";
import { bookShelfStore } from "../Stores/bookShelfStore";
import { loginStore } from "../Stores/loginStore";
import { useTitle } from "../Components/useTitle";
import { useEffect } from "react";
import { Link, useLocation } from "react-router-dom";

export default function BookShelf() {
  useTitle(`Caleb's Book Store - Bookshelf`);

  const { onRender, response, currentlyReading, wantToRead, read } =
    bookShelfStore((state) => state);
  const { token } = loginStore((state) => state);

  useEffect(() => {
    onRender(token);
  }, [onRender, token]);

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
                <form onSubmit={null}>
                  <label htmlFor="bookShelf" />
                  <select
                    name="bookShelf"
                    id="bookShelf"
                    onChange={null}
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
