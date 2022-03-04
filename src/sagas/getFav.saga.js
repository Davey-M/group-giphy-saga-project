import { put } from 'redux-saga/effects'
import axios from 'axios'

function* getFav() {
  try {

    const favResponse = yield axios.get(`/api/favorite/`);
    yield put({ type: 'GET_FAV', payload: favResponse.data })
  }
  catch (error) {
    console.log('Error GETing Fav GIFS', error);
  }
}

export default getFav;