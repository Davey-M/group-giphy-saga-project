import { put } from 'redux-saga/effects'
import axios from 'axios'

function* postGIF(action) {
  try {
      yield axios.post('/api/favorite', action.payload );
      yield put({ type: 'POST_GIF'});
  }
  catch (error) {
      console.log('Error POSTing a GIF', error);
  }
}

export default postGIF;