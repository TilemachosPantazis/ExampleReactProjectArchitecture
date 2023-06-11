
import { createSelector } from 'reselect';
import { LoadingStateEnum } from '../../../SharedModels/LoadingStates';
import { AppState } from '../../../Utils/SharedReducer';

const getExampleDataState = (state: AppState): LoadingStateEnum => {
    return state.entities.mainPageReducer.ExampleDataState;
  };
  export const getDataHasBeenLoadedSelector = createSelector(getExampleDataState, (dataHasBeenLoaded: LoadingStateEnum): boolean => dataHasBeenLoaded !== LoadingStateEnum.LoadingState);

  const getAddressState = (state: AppState): LoadingStateEnum => {
    return state.entities.mainPageReducer.GetAddressState;
  };
  export const getAddressLoadedSelector = createSelector(getAddressState, (dataHasBeenLoaded: LoadingStateEnum): boolean => dataHasBeenLoaded !== LoadingStateEnum.LoadingState);

  const getAddress = (state: AppState): any[] => {
    return state.entities.mainPageReducer.FullAddress;
  };
  export const addressSelector = createSelector(getAddress, (address: any): any[] => address);