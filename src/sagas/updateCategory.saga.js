import axios from "axios";
import { put } from 'redux-saga/effects';

function* updateCategory(action) {
  try {
    yield axios.put(`/api/favorite/${action.payload.img_id}`, action.payload);
    yield put({
      type: "GET_FAVORITES"
    })
  } catch (err) {
    console.error('Error in updateCategory()', err);
  }
}

export default updateCategory;