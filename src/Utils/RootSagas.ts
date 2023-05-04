import { all, fork } from 'redux-saga/effects';
import mainPageSaga from '../Pages/MainPage/Utils/MainPageSagas';

export interface IDefaultAction {
  type: any;
  payload: any;
}

export function* rootSaga() {
  yield all([
    fork(mainPageSaga),
  ]);
}
