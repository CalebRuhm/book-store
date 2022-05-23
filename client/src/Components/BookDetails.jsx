import "../Styles/BookDetails.scss";
import React from "react";
import { useParams } from "react-router-dom";

export default function BookDetails() {
  const { bookId } = useParams();
  return <div>BookDetails {bookId}</div>;
}
