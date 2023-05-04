import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from '@redux-saga/core';
import rootReducer from './SharedReducer';
import { composeWithDevTools } from 'redux-devtools-extension';
import { rootSaga } from './RootSagas';

const initialState = {};
const sagaMiddleware = createSagaMiddleware();

const store = createStore(rootReducer, initialState, composeWithDevTools(applyMiddleware(sagaMiddleware)));

sagaMiddleware.run(rootSaga);

export default store;