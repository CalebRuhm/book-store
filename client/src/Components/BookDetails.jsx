import "../Styles/BookDetails.scss";
import React from "react";
import NavBar from "../Components/NavBar";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { bookId } = useParams();
  return (
    <>
      <NavBar />
      <div>BookDetails {bookId}</div>;
    </>
  );
}
