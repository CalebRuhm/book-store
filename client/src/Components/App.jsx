import "../Styles/App.scss";
import { Route, Routes } from "react-router-dom";
import NavBar from "../Components/NavBar";
import Login from "../Components/Login";
import BookShelf from "../Components/BookShelf";
import Search from "../Components/Search";

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
          <Route path="/search" element={<Search />} component={Search} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
