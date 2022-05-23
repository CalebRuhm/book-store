import "../Styles/App.scss";
import { Route, Routes, useHistory } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Login from "../Components/Login";
import BookShelf from "../Components/BookShelf";
import Search from "../Components/Search";
import BookDetails from "../Components/BookDetails";
import PageNotFound from "../Components/PageNotFound";

function App() {
  return (
    <div className="App">
      <NavBar />
      <div className="Content">
        <Routes>
          <Route exact path="/" element={<Login />} component={Login} />
          <Route
            exact
            path="/book-shelf"
            element={<BookShelf />}
            component={BookShelf}
          />
          <Route exact path="/search" element={<Search />} component={Search} />
          <Route
            exact
            path="/book"
            element={<BookDetails />}
            component={BookDetails}
          />
          <Route exact path="*" element={<PageNotFound />} component={PageNotFound} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
