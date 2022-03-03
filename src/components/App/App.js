import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GifList from '../GifList/GifList';
import Search from '../Search/Search';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_GIFS', payload: 'dwayne the rock' });
  }, [])

  return (
    <div>
      <h1>Giphy Search!</h1>
      <Search/>
      <GifList />
    </div>
  );
}

export default App;
