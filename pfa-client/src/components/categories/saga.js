import { takeLatest, call, put } from 'redux-saga/effects';
import { privateRequest } from '@helpers/requestHelper';
import { DELETE_CATEGORY } from './constants';
import {
  getCategories as getCategoriesAction,
} from "@components/spendings/actions";

export function* onDeleteCategory(payload) {
  const { category } = payload;
  try {
    yield call(privateRequest, `/categories/${category.ID}`, {
      method: 'DELETE',
    });
    console.log('success deleting categories');
    yield put(getCategoriesAction());
  } catch (err) {
    console.log(err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(DELETE_CATEGORY, onDeleteCategory);
}
