import { IErrorPayload } from '../../../SharedModels/ErrorPayload';
import { IFilterOptions } from '../../../SharedModels/FilterModels';

export enum ExampleActions {
  EXAMPLE = 'EXAMPLE',
  EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS',
  EXAMPLE_FAIL = 'EXAMPLE_FAIL'
}

export enum GetAddressActions {
  GET_ADDRESS = 'GET_ADDRESS',
  GET_ADDRESS_SUCCESS = 'GET_ADDRESS_SUCCESS',
  GET_ADDRESS_FAIL = 'GET_ADDRESS_FAIL'
}

export interface IExampleAction {
  type: typeof ExampleActions.EXAMPLE;
  payload: IFilterOptions;
}
export interface IExampleActionSuccess {
  type: typeof ExampleActions.EXAMPLE_SUCCESS;
}
export interface IExampleActionFail {
  type: typeof ExampleActions.EXAMPLE_FAIL;
  payload: IErrorPayload;
}

export const exampleAction = (exampleInfo: IFilterOptions): IExampleAction => ({
  type: ExampleActions.EXAMPLE,
  payload: exampleInfo,
});
export const exampleActionSuccess = (): IExampleActionSuccess => ({
  type: ExampleActions.EXAMPLE_SUCCESS,
});
export const exampleActionFail = (error: IErrorPayload): IExampleActionFail => ({
  type: ExampleActions.EXAMPLE_FAIL,
  payload: error,
});

export interface IGetAddressAction {
  type: typeof GetAddressActions.GET_ADDRESS;
  payload: string;
}
export interface IGetAddressActionSuccess {
  type: typeof GetAddressActions.GET_ADDRESS_SUCCESS;
  payload: any;
}
export interface IGetAddressActionFail {
  type: typeof GetAddressActions.GET_ADDRESS_FAIL;
  payload: IErrorPayload;
}


export const getAddressAction = (address: string): IGetAddressAction => ({
  type: GetAddressActions.GET_ADDRESS,
  payload: address,
});

export const getAddressActionSuccess = (fullAddress: any): IGetAddressActionSuccess => ({
  type: GetAddressActions.GET_ADDRESS_SUCCESS,
  payload: fullAddress
});
export const getAddressActionFail = (error: IErrorPayload): IGetAddressActionFail => ({
  type: GetAddressActions.GET_ADDRESS_FAIL,
  payload: error,
});
