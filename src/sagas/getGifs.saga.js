import { put } from 'redux-saga/effects'
import axios from 'axios'

function* getGifs(action) {
  try {

    const searchString = action.payload;

    const gifResponse = yield axios.get(`/api/giphy/${searchString}`);
    yield put({ type: 'LIST_GIFS', payload: gifResponse.data })
  }
  catch (error) {
    console.log('Error GETing GIFS', error);
  }
}

export default getGifs;