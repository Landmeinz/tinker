import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// --- GET ALL MESSAGES --- //
function* fetchMessages() {
    try {
        const response = yield axios.get('/api/messages')
        yield put({ type: 'SET_MESSAGES', payload: response.data })
    } catch (error) {
        console.log('ERROR fetchMessages Saga', error);
    }
}; // fetchMessages

// --- POST NEW MESSAGE --- //
function* postMessage(action) {
    try {
        yield axios.post('/api/messages', action.payload)
        yield put({ type: 'FETCH_MESSAGES' })
    } catch (error) {
        console.log('ERROR', error);
        yield put({ type: 'ERROR postMessage SAGA' })
    }
}; // postPlant

function* messagesSaga() {
    yield takeLatest('FETCH_MESSAGES', fetchMessages);
    yield takeLatest('POST_MESSAGE', postMessage);
}; // messagesSaga

export default messagesSaga;