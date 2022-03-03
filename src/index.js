import React from "react";
import ReactDOM from "react-dom";
import App from "./components/App/App";
import { createStore, combineReducers, applyMiddleware } from "redux";
import { Provider } from "react-redux";
import createSagaMiddleware from "redux-saga";
import logger from "redux-logger";
import { takeEvery, put } from "redux-saga/effects";

import gifList from "./reducers/gifList.reducer";
import getGifs from "./sagas/getGifs.saga";
import postGif from "./sagas/postGif.saga";
import deleteGif from "./sagas/deleteGifs.saga";

const sagaMiddleware = createSagaMiddleware();

const storeInstance = createStore(
  combineReducers({
    gifList,
  }),
  applyMiddleware(sagaMiddleware, logger)
);

function* watcherSaga() {
  yield takeEvery("GET_GIFS", getGifs);
  yield takeEvery("POST_GIF", postGif);
  yield takeEvery("DELETE_FAVE", deleteGif);
}

sagaMiddleware.run(watcherSaga);

ReactDOM.render(
  <Provider store={storeInstance}>
    <App />
  </Provider>,
  document.getElementById("root")
);
