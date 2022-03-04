import React from "react";
import { HashRouter as Router, Route, Link } from 'react-router-dom';

import GifList from "../GifList/GifList";
import Search from "../Search/Search";
import Favorites from "../Favorites/Favorites"

import "./App.css";

import {Button} from '@mui/material';

function App(props) {

  return (
    <Router>
      <div className="navBar">
            <Button variant="text">
              <Link to="/" style={{ textDecoration: 'none', color: 'white' }}>Search</Link>
            </Button>
            <Button variant="text">
              <Link to="/favorites" style={{ textDecoration: 'none', color: 'white' }}>Favorites</Link>
            </Button>
          </div>
      <main>
        <div>
          <Route path="/" exact>
            <h1>Giphy Search!</h1>
            <Search />
            <GifList />
          </Route>
          <Route path="/favorites" exact>
            <Favorites />
          </Route>
        </div>
      </main>
    </Router>
  );
}

export default App;
