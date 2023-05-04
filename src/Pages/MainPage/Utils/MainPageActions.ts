import { IErrorPayload } from '../../../SharedModels/ErrorPayload';
import { IFilterOptions } from '../../../SharedModels/FilterModels';

export enum ExampleActions {
  EXAMPLE = 'EXAMPLE',
  EXAMPLE_SUCCESS = 'EXAMPLE_SUCCESS',
  EXAMPLE_FAIL = 'EXAMPLE_FAIL'
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
