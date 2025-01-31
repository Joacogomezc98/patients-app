import { all } from "redux-saga/effects";
import { watchFetchPatients } from "./patients/patients.saga";

// Root saga that combines all sagas
export default function* rootSaga() {
  yield all([
    watchFetchPatients(),
  ]);
}
