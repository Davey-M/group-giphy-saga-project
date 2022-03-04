import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { takeEvery, put } from "redux-saga/effects";

// import reducers
import gifList from "./reducers/gifList.reducer";
import gifFav from './reducers/getFav.reducer';

// saga imports
import getGifs from "./sagas/getGifs.saga";
import postGif from "./sagas/postGif.saga";
import deleteGif from "./sagas/deleteGifs.saga";
import getFav from "./reducers/getFav.reducer";
import updateCategory from "./sagas/updateCategory.saga";

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    gifList,
    gifFav,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

function* watcherSaga() {
  yield takeEvery("GET_GIFS", getGifs);
  yield takeEvery("POST_GIF", postGif);
  yield takeEvery("DELETE_FAVE", deleteGif);
  yield takeEvery('UPDATE_CATEGORY', updateCategory);
  yield takeEvery('GET_FAVORITES', getFav);
}

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
