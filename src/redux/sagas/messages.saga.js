import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchMessages() {
    console.log('--- in fetchMessages Saga!');

    try {
        const response = yield axios.get('/api/messages')

        yield put({ type: 'SET_MESSAGES', payload: response.data })
        console.log(response.data);
        
    } catch (error) {
        console.log('ERROR fetchMessages Saga', error);
    }
}; // fetchMessages

function* messagesSaga() {
    yield takeLatest('FETCH_MESSAGES', fetchMessages)
}; // messagesSaga

export default messagesSaga;