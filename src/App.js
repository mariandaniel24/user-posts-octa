import "./App.css";
import UserDetails from "./pages/UserDetails";
import UserPosts from "./pages/UserPosts";
import Users from "./pages/Users";
import Home from "./pages/Home";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import NavBar from "./components/NavBar";

function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>

          <Route path="/users">
            <Users />
          </Route>

          <Route exact path="/user/:userId">
            <UserDetails />
          </Route>
          <Route exact path="/user/:userId/posts">
            <UserPosts />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
