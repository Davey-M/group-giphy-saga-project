import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import GifList from "../GifList/GifList";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites"

import "./App.css";

function App(props) {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: "GET_GIFS", payload: "dwayne the rock" });
  }, []);

  return (
    <Router>
      <ul>
          <li>
            <Link to="/">Search</Link>
          </li>
          <li>
            <Link to="/favorites">Favorites</Link>
          </li>
        </ul>
      <div>
        <Route path="/">
          <h1>Giphy Search!</h1>
          <Search />
          <GifList />
        </Route>
        <Route>
          <Favorites />
        </Route>
      </div>
    </Router>
  );
}

export default App;
