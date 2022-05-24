import "../Styles/Search.scss";
import NavBar from "../Components/NavBar";
import { searchStore } from "../Stores/searchStore";

export default function Search() {
  return (
    <>
      <NavBar />
      <div className="container">
        <button>Search</button>
        <label htmnlFor="Search" />
        <input
          type="text"
          name="search"
          placeholder="Harry Potter and the Prisoner of Azkaban"
        ></input>
      </div>
    </>
  );
}
