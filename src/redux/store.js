import { applyMiddleware } from 'redux'
import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { promiseMiddleware } from '@adobe/redux-saga-promise';
import { configureStore } from '@reduxjs/toolkit'

import rootReducer from './reducers/_root.reducer';
import rootSaga from './sagas/_root.saga';

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [promiseMiddleware, sagaMiddleware, logger] :
  [promiseMiddleware, sagaMiddleware];

const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => [...middlewareList],
  // middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
});

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;