import { all, call, put, takeLatest } from '@redux-saga/core/effects';
import { AxiosResponse } from 'axios';
import { ErrorPayload } from '../../../SharedModels/ErrorPayload';

import { exampleApiCall, getAddressApiCall } from './MainPageService';
import { ExampleActions, GetAddressActions, IExampleAction, IGetAddressAction, exampleActionFail, exampleActionSuccess, getAddressActionFail, getAddressActionSuccess } from './MainPageActions';

function* mainPageSaga() {
  yield all([
    takeLatest(ExampleActions.EXAMPLE, exampleCall),
    takeLatest(GetAddressActions.GET_ADDRESS, getAddress),
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

  function* getAddress(action: IGetAddressAction) {
    try {
      const fullAddress: AxiosResponse<any> = yield call(() => getAddressApiCall(action.payload));
      console.log("dss", fullAddress)
      yield put(getAddressActionSuccess(fullAddress?.data));
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
      yield put(getAddressActionFail(new ErrorPayload()));
    }
