import { AnyAction } from "redux-saga";
import { call, put, takeEvery } from "redux-saga/effects";
import { getPatientsData } from "../../api";
import { fetchPatients, fetchPatientsError, fetchPatientsSuccess } from "./patients.slice";

// Patients Saga function
function* fetchPatientsSaga(): Generator<AnyAction, void, any> {
    try {
        const patients = yield call(getPatientsData);
        yield put(fetchPatientsSuccess(patients)); // Dispatch success action
    } catch (error) {
        yield put(fetchPatientsError('Error fetching patients')); // Dispatch failure action
    }
}

// Watcher saga
export function* watchFetchPatients() {
    yield takeEvery(fetchPatients.type.toString(), fetchPatientsSaga);
}
