import createSagaMiddleware from 'redux-saga';
import logger from 'redux-logger';
import { promiseMiddleware } from '@adobe/redux-saga-promise';
import { configureStore } from '@reduxjs/toolkit';
import _debounce from 'lodash/debounce';
import { batchedSubscribe } from 'redux-batched-subscribe';

// import { persistStore, persistReducer } from 'redux-persist';
// import storage from 'redux-persist/lib/storage'; 

import rootReducer from './reducers/_root.reducer';
import rootSaga from './sagas/_root.saga';

const sagaMiddleware = createSagaMiddleware();

// this line creates an array of all of redux middleware you want to use
// we don't want a whole ton of console logs in our production code
// logger will only be added to your project if your in development mode
const middlewareList = process.env.NODE_ENV === 'development' ?
  [promiseMiddleware, sagaMiddleware, logger] :
  [promiseMiddleware, sagaMiddleware];

const debounceNotify = _debounce(notify => notify());

const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({ thunk: false }).concat(middlewareList),
    devTools: process.env.NODE_ENV !== 'production',
    enhancers: [batchedSubscribe(debounceNotify)]
});

// tells the saga middleware to use the rootSaga
// rootSaga contains all of our other sagas
sagaMiddleware.run(rootSaga);

export default store;
