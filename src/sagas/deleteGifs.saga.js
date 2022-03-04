import { put } from "redux-saga/effects";
import axios from "axios";

function* deleteGif(action) {
  try {
    yield axios.delete(`/api/favorite/${action.payload.img_id}`);
    yield put({ type: "GET_FAVORITES" });
  } catch (error) {
    console.log("deleteGif saga error", error);
  }
}

export default deleteGif;
