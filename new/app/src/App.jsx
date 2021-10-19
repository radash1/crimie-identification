import {
  BrowserRouter as Router,
  Route,
  Switch,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";
import Login from "./pages/Login";
import Register from "./pages/Register";
import Profile from "./pages/Profile";
import Search from "./pages/Search";
import SearchResult from "./pages/SearchResult";
import NotFound from "./pages/NotFound";
import styles from "./styles/App.module.css";

function App() {
  return (
    <Router>
      <div className={styles.wrapper}>
        <Navbar />
        <div className={styles.content}>
          <Switch>
            <Route exact path="/">
              <Login />
            </Route>
            <Route path="/register">
              <Register />
            </Route>
            <Route path="/profile/:id">
              <Profile />
            </Route>
            <Route path="/search">
              <Search />
            </Route>
            <Route path="/search-result">
              <SearchResult />
            </Route>
            <Route path="*">
              <NotFound />
            </Route>
          </Switch>
        </div>
      </div>
    </Router>
  );
}

export default App;
