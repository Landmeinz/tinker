import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// --- GET ALL MESSAGES --- //
function* fetchWeeklyForm() {
    try {
        const response = yield axios.get('/api/weeklyForm')
        yield put({ type: 'SET_WEEKLY_FORM', payload: response.data })
    } catch (error) {
        console.log('ERROR fetchMessages Saga', error);
    }
}; // fetchWeeklyForm

// --- POST NEW WEEKLY --- //
function* postWeeklyForm(action) {
    try {
        yield axios.post('/api/weeklyForm', action.payload)
        yield put({ type: 'FETCH_WEEKLY_FORM' })
    } catch (error) {
        console.log('ERROR', error);
        yield put({ type: 'ERROR postWeeklyForm SAGA' })
    }
}; // postWeeklyForm

function* weeklyFormSaga() {
    yield takeLatest('FETCH_WEEKLY_FORM', fetchWeeklyForm);
    yield takeLatest('POST_WEEKLY_FORM', postWeeklyForm);
}; // weeklyFormSaga

export default weeklyFormSaga;