import React, { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import GifList from '../GifList/GifList';

function App(props) {

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch({ type: 'GET_GIFS', payload: 'dwayne the rock' });
  }, [])

  return (
    <div>
      <h1>Giphy Search!</h1>
      <GifList />
    </div>
  );
}

export default App;
