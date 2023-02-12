import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// worker Saga: will be fired on "FETCH_USER" actions
function* fetchUser() {
  try {
    console.log('--- hit fetchUser TRY ---');

    axios.defaults.withCredentials = true;
    axios.defaults.headers.common['Content-Type'] = 'application/json';

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('/api/user')
      // .then((res) => {
      //   console.log('Accept-Encoding status:', res.status);
      // })
      // .catch((error) => {
      //   console.log('--- !!! : ERROR :', error);
      // })
      .catch((error) => {
        if (error.response) {
          // The request was made and the server responded with a status code
          // that falls out of the range of 2xx
          console.log('error.response.data:', error.response.data);
          console.log('error.response.status:', error.response.status);
          console.log('error.response.headers:', error.response.headers);
          console.log('error.toJSON():', error.toJSON());
        } else if (error.request) {
          // The request was made but no response was received
          // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
          // http.ClientRequest in node.js
          console.log('error.request:', error.request);
        } else {
          // Something happened in setting up the request that triggered an Error
          console.log('--- !!! error.message:', error.message);
        }
        console.log(error.config);
      });
    console.log('--- hit response:', response);
    // const response = yield axios.get('/api/user', config)
    // .then(res => console.log(res.status))
    // .catch(err => console.log(err));

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_USER', payload: response.data });
  } catch (error) {
    // console.log('User get request failed', error);
  }
}

// worker Saga: will be fired on "FETCH_ALL_USERS" actions
function* fetchAllUsers() {
  try {
    const config = {
      headers: { 'Content-Type': 'application/json' },
      // withCredentials: true,
    };

    // the config includes credentials which
    // allow the server session to recognize the user
    // If a user is logged in, this will return their information
    // from the server session (req.user)
    const response = yield axios.get('http://localhost:5050/api/user/all', config);

    // now that the session has given us a user object
    // with an id and username set the client-side user object to let
    // the client-side code know the user is logged in
    yield put({ type: 'SET_ALL_USERS', payload: response.data });
  } catch (error) {
    // console.log('User get request failed', error);
  }
}

function* userSaga() {
  yield takeLatest('FETCH_USER', fetchUser);
  yield takeLatest('FETCH_ALL_USERS', fetchAllUsers);
}

export default userSaga;
