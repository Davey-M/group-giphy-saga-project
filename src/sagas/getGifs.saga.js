import { put } from 'redux-saga/effects'
import axios from 'axios'

function* getGifs() {
  try {
      const gifResponse = yield axios.get('/api/');
      yield put ({ type: 'LIST_GIFS', payload: gifResponse.data })
  }
  catch(error) {
      console.log('Error GETing GIFS', error);
  }
}

export default getGifs;