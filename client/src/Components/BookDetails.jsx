import "../Styles/BookDetails.scss";
import React from "react";
import NavBar from "../Components/NavBar";
import { useParams } from "react-router-dom";
import { bookDetailsStore } from "../Stores/bookDetailsStore";
import { loginStore } from "../Stores/loginStore";
import { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCartShopping } from "@fortawesome/free-solid-svg-icons";
import { useTitle } from "../Components/useTitle";
import { addBookStore } from "../Stores/addBookStore";

export default function BookDetails() {
  const { bookId } = useParams();
  const { onRender, response } = bookDetailsStore((state) => state);
  const { token } = loginStore((state) => state);
  const { handleChange, handleSubmit } = addBookStore((state) => state);

  useEffect(() => {
    onRender(token, bookId);
  }, [onRender, token, bookId]);

  useTitle(`Caleb's Book Store - ${response.title}`);

  return (
    <>
      <NavBar />
      <div className="book">
        <div className="container">
          <div className="img">
            {response.imageLinks && (
              <img
                src={response.imageLinks.thumbnail}
                alt={response.title}
              ></img>
            )}
          </div>
          <div className="details">
            <h1 className="title">{response.title}</h1>
            <h2 className="subtitle">{response.subtitle}</h2>
            {response.authors && (
              <div className="authors">
                {response.authors.map((newAuthor, idx) => (
                  <p key={idx}>{newAuthor}</p>
                ))}
              </div>
            )}

            <div className="published">
              <p className="publishers">{response.publisher} - </p>
              <p className="publishDate"> {response.publishedDate}</p>
            </div>

            {response.categories && <p>{response.categories[0]}</p>}
            <p>Pages: {response.printedPageCount}</p>
            <p className="description">{response.description}</p>

            <a href={response.previewLink} target="blank" className="link">
              <FontAwesomeIcon icon={faCartShopping} className="bookIcon" />
            </a>

            <form onSubmit={(e) => handleSubmit(e)}>
              <label htmlFor="bookShelf" />
              <select
                name="bookShelf"
                id="bookShelf"
                onChange={(e) => handleChange(e, response.id, token)}
                value={response.shelf}
              >
                <option value="none">None</option>
                <option value="currentlyReading">Currently Reading</option>
                <option value="wantToRead">Want to Read</option>
                <option value="read">Read</option>
              </select>
            </form>
          </div>
        </div>
      </div>
    </>
  );
}
