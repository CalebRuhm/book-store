import "../Styles/PageNotFound.scss";
import NavBar from "../Components/NavBar";
import { Link, useLocation } from "react-router-dom";
import sad from "../img/sad.png";
import { useTitle } from "../Components/useTitle";

export default function PageNotFound() {
  useTitle(`Caleb's Book Store - 404`);
  const location = useLocation();

  return (
    <>
      <NavBar />
      <div className="container">
        <div className="info">
          <h1>Sorry! The page '{location.pathname} ' doesn't exist.</h1>
          <Link className="link" to="/book-shelf">
            Back to Bookshelf
          </Link>
          <img src={sad} alt="" className="img" />
        </div>
      </div>
    </>
  );
}
