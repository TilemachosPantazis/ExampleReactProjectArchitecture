import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { ErrorPayload } from '../../../SharedModels/ErrorPayload';

import { exampleApiCall } from './MainPageService';
import { ExampleActions, IExampleAction, exampleActionFail, exampleActionSuccess } from './MainPageActions';

function* mainPageSaga() {
  yield all([
    takeLatest(ExampleActions.EXAMPLE, exampleCall),
  ]);
}

export default mainPageSaga;

function* exampleCall(action: IExampleAction) {
  try {
    console.log("Here the Saga acts on the data", action.payload);
    const example: AxiosResponse<any> = yield call(() => exampleApiCall(action.payload));
    console.log("The successful response",example)
    yield put(exampleActionSuccess());
  } catch (e: any) {
/*     const error: IErrorPayload = {
      Error: {
        Type: e?.response?.data?.type,
        Title: 'Something went wrong',
        Message: e?.response?.data?.LogiSnapErrorMessage || e?.response?.data?.message,
        ErrorCode: e?.response?.status,
        UID: e?.response?.data?.UID,
      }, */
    };
    yield put(exampleActionFail(new ErrorPayload()));
  }
