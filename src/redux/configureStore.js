// // src/redux/configureStore.js
// import { configureStore } from '@reduxjs/toolkit';
// import createSagaMiddleware from 'redux-saga';
// import { persistStore, persistReducer } from 'redux-persist';
// import logger from 'redux-logger';
// import { promiseMiddleware } from '@adobe/redux-saga-promise';
// import _debounce from 'lodash/debounce';
// import { batchedSubscribe } from 'redux-batched-subscribe';
// import storage from 'redux-persist/lib/storage';
// import rootReducer from './reducers/_root.reducer.js';
// import rootSaga from './sagas/_root.saga.js';

// const sagaMiddleware = createSagaMiddleware();

// const middlewareList = process.env.NODE_ENV === 'development' ?
//   [promiseMiddleware, sagaMiddleware, logger] :
//   [promiseMiddleware, sagaMiddleware];

// const debounceNotify = _debounce(notify => notify());

// const persistConfig = {
//     key: 'root',
//     storage,
// };

// const persistedReducer = persistReducer(persistConfig, rootReducer);

// const store = configureStore({
//     reducer: persistedReducer,
//     middleware: (getDefaultMiddleware) =>
//         getDefaultMiddleware({ thunk: false }).concat(middlewareList),
//     devTools: process.env.NODE_ENV !== 'production',
//     enhancers: [batchedSubscribe(debounceNotify)]
// });
// const persistor = persistStore(store);

// sagaMiddleware.run(rootSaga);

// const config = {
//     store,
//     persistor,
//   };
  
//   export default config;

// // export default { store, persistor };
