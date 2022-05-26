import "../Styles/BookDetails.scss";
import React from "react";
import NavBar from "../Components/NavBar";
import { useParams } from "react-router-dom";
import { bookDetailsStore } from "../Stores/bookDetailsStore";
import { loginStore } from "../Stores/loginStore";
import { useEffect } from "react";

export default function BookDetails() {
  const { bookId } = useParams();
  const { onRender, response } = bookDetailsStore((state) => state);
  const { token } = loginStore((state) => state);

  useEffect(() => {
    onRender(token, bookId);
  }, [onRender, token, bookId]);

  console.log(response);

  return (
    <>
      <NavBar />
      <div>BookDetails {bookId}</div>;
    </>
  );
}
