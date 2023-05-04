import { combineReducers } from 'redux';
import MainPageReducer from '../Pages/MainPage/Utils/MainPageReducer';

const rootReducer = combineReducers({
  entities: combineReducers({
    mainPageReducer: MainPageReducer,
  }),
});

export type AppState = ReturnType<typeof rootReducer>;

export default rootReducer;