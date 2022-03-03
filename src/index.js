import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App/App';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { takeEvery, put } from 'redux-saga/effects';

import gifList from './reducers/gifList.reducer'
import getGifs from './sagas/getGifs.saga'
import postGif from './sagas/postGif.saga'


const storeInstance = createStore(
  combineReducers({
      gifList,
  }),
  applyMiddleware(sagaMiddleware, logger),
);


function* watcherSaga() {
      yield takeEvery('GET_GIFS', getGifs)
      yield takeEvery('POST_GIF', postGif)
  }

const sagaMiddleware = createSagaMiddleware();

ReactDOM.render(
  <Provider store={storeInstance}>
    <App/>
  </Provider>,
document.getElementById('root'));
