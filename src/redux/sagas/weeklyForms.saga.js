import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

// --- GET ALL MESSAGES --- //
function* fetchWeeklyForms() {
    try {
        const config = {
            headers: { 'Content-Type': 'application/json' },
            withCredentials: true,
          };
        const response = yield axios.get('/api/weeklyForms', config)
        yield put({ type: 'SET_WEEKLY_FORMS', payload: response.data })
    } catch (error) {
        console.log('ERROR fetchMessages Saga', error);
    }
}; // fetchWeeklyForm

// --- POST NEW WEEKLY --- //
function* postWeeklyForm(action) {
    console.log('hit postWeeklyForm in saga.js');

    try {
        yield axios.post('/api/weeklyForms', action.payload)
        yield put({ type: 'FETCH_WEEKLY_FORMS' })
        console.log('post try success');
        
    } catch (error) {
        console.log('ERROR', error);
        yield put({ type: 'ERROR postWeeklyForm SAGA' })
    }
}; // postWeeklyForm

function* weeklyFormSaga() {
    yield takeLatest('FETCH_WEEKLY_FORMS', fetchWeeklyForms);
    yield takeLatest('POST_WEEKLY_FORM', postWeeklyForm);
}; // weeklyFormSaga

export default weeklyFormSaga;