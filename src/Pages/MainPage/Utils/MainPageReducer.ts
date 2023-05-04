import { LoadingStateEnum } from "../../../SharedModels/LoadingStates";
import { IDefaultAction } from "../../../Utils/RootSagas";
import { ExampleActions } from "./MainPageActions";


export interface MainPageState {
  ExampleDataState: LoadingStateEnum;
  ExampleData: boolean;
}

export const initialLoginState: MainPageState = {
    ExampleData: false,
    ExampleDataState: LoadingStateEnum.InitialState
};

// eslint-disable-next-line import/no-anonymous-default-export
export default (state = initialLoginState, action: IDefaultAction): MainPageState => {
  switch (action.type) {
      case ExampleActions.EXAMPLE:
        console.log("Change the status for getting data");
        return {
          ...state,
          ExampleDataState: LoadingStateEnum.LoadingState,
        };
      case ExampleActions.EXAMPLE_SUCCESS:
        return {
          ...state,
          ExampleDataState: LoadingStateEnum.LoadedState,
          ExampleData: true,
        };
      case ExampleActions.EXAMPLE_FAIL:
        console.log("Handle issues in reducer");
        return {
          ...state,
          ExampleDataState: LoadingStateEnum.ErrorState,
        };
    default:
      return {
        ...state,
      };
  }
};