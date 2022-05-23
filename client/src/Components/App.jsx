import "../Styles/App.scss";
import { Route, Routes } from "react-router-dom";
import Login from "../Components/Login";
import BookShelf from "../Components/BookShelf";
import Search from "../Components/Search";
import BookDetails from "../Components/BookDetails";
import PageNotFound from "../Components/PageNotFound";
import ProtectedRoute from "../Components/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <div className="Content">
        <Routes>
          <Route exact path="/" element={<Login />} component={Login} />
          <Route element={<ProtectedRoute />}>
            <Route
              exact
              path="/book-shelf"
              element={<BookShelf />}
              component={BookShelf}
            />
            <Route
              exact
              path="/search"
              element={<Search />}
              component={Search}
            />
            <Route
              exact
              path="/book/:bookId"
              element={<BookDetails />}
              component={BookDetails}
            />
            <Route
              exact
              path="*"
              element={<PageNotFound />}
              component={PageNotFound}
            />
          </Route>
        </Routes>
      </div>
    </div>
  );
}

export default App;
