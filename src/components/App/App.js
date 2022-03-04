import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GifList from '../GifList/GifList';
import Search from '../Search/Search';
import Favorites from '../Favorites/Favorites';

import './App.css'

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_GIFS', payload: 'dwayne the rock' });
  }, [])

  return (
    <div>
      <h1>Giphy Search!</h1>
      {/* <Search />
      <GifList /> */}
      <Favorites />
    </div>
  );
}

export default App;
