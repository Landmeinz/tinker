import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    // console.log('User get request failed', error);
    console.log('error.response.data:', error.response.data);
    console.log('error.response.status:', error.response.status);
    console.log('error.response.headers:', error.response.headers);
    console.log('error.toJSON():', error.toJSON());
  }
}

// worker Saga: will be fired on "FETCH_ALL_USERS" actions
function* fetchAllUsers() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user/all', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_ALL_USERS', payload: response.data });
  } catch (error) {
    // console.log('User get request failed', error);
    console.log('error.response.data:', error.response.data);
    console.log('error.response.status:', error.response.status);
    console.log('error.response.headers:', error.response.headers);
    console.log('error.toJSON():', error.toJSON());
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('FETCH_ALL_USERS', fetchAllUsers);
}

export default userSaga;

