import axios from 'axios';
import { put, takeLatest } from 'redux-saga/effects';

function* fetchCurrentDate() {
    console.log('--- hit fetchCurrentDate SAGA ---');
    try {
        console.log('---', process.env.TARGET_ENDPOINT);
        
        const response = yield axios.get(`/api/date`)
        console.log('--- response:', response);

        
        yield put({ type: 'SET_CURRENT_DATE', payload: response.data })
    } catch (error) {
        console.log('ERROR fetchCurrentDate Saga', error);
    }
}; // fetchCurrentDate

function* currentDateSaga() {
    yield takeLatest('FETCH_CURRENT_DATE', fetchCurrentDate)
}; // currentDateSaga

export default currentDateSaga;