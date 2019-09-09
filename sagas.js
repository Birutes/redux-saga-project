import { put, takeLatest, all, call, takeEvery, fork } from 'redux-saga/effects';
import { GET_ITEMS, ITEMS_RECEIVED, itemsReceived, POST_ITEMS, postReceived } from './actions'
import { fetchData, createPost } from "./api";

function* fetchItems(action) {
  try {
    const albums = yield call(fetchData);   
    yield put(itemsReceived(albums));
  } catch (e) {
    console.log(e);
  }
}

function* postItems(action) {
  try {
    const album = yield call(createPost, action.payload);   
    yield put(postReceived(album));
  } catch (e) {
    console.log(e);
  }
}

function* actionWatcher() {
     yield takeLatest(GET_ITEMS, fetchItems)
}

function* actionWatcher2() {
  yield takeEvery(POST_ITEMS, postItems)
}


export default function* mySaga() {
    yield all([
      actionWatcher(),
      actionWatcher2()
    ])
}
