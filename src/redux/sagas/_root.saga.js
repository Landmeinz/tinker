import { all } from 'redux-saga/effects';

import userSaga from './user.saga';
import registrationSaga from './registration.saga';
import loginSaga from './login.saga';
import currentDateSaga from './currentDate.saga';
import messagesSaga from './messages.saga';
import weeklyFormsSaga from './weeklyForms.saga';


// rootSaga is the primary saga.
// It bundles up all of the other sagas so our project can use them.
// This is imported in index.js as rootSaga

// some sagas trigger other sagas, as an example
// the registration triggers a login
// and login triggers setting the user
export default function* rootSaga() {
  yield all([
    userSaga(),
    registrationSaga(),
    loginSaga(),
    currentDateSaga(),
    messagesSaga(),
    weeklyFormsSaga(),
  
  ]);
}; // rootSaga
