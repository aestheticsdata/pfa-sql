import { takeLatest, select, call } from 'redux-saga/effects';
import { privateRequest } from '@helpers/requestHelper';
import { UPDATE_LANG } from './constants';


export function* onUpdateLang(payload) {
  try {
    const user = yield select(state => state.loginReducer.user);
    yield call(privateRequest, `/users/${user.id}`, {
      method: 'PUT',
      data: {
        lang: payload.lang,
      }
    });
    window.location.reload();
  } catch (err) {
    console.log('could not update user : ', err);
  }
}

export default function* defaultSaga() {
  yield takeLatest(UPDATE_LANG, onUpdateLang);
}
