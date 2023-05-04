
import { createSelector } from 'reselect';
import { LoadingStateEnum } from '../../../SharedModels/LoadingStates';
import { AppState } from '../../../Utils/SharedReducer';

const getExampleDataState = (state: AppState): LoadingStateEnum => {
    return state.entities.mainPageReducer.ExampleDataState;
  };
  export const getDataHasBeenLoadedSelector = createSelector(getExampleDataState, (dataHasBeenLoaded: LoadingStateEnum): boolean => dataHasBeenLoaded !== LoadingStateEnum.LoadingState);