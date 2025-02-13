import { Store } from '../store.types';

export const selectPatients = (state: Store) => state.patients.patients;
export const selectPatientsStatus = (state: Store) => state.patients.status;
export const selectActivePatient = (state: Store) =>
  state.patients.selectedPatient;
