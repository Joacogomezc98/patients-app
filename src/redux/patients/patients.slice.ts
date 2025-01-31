import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { Patient, patientsInitialState } from "./patients.types";

const patients = createSlice({
    name: 'patients',
    initialState: patientsInitialState,
    reducers: {
        fetchPatients(store) {
            store.status.isPatientsLoading = true;
        },
        fetchPatientsSuccess(store, action: PayloadAction<Patient[]>) {
            store.status.isPatientsLoading = false;
            store.status.error = null;
            store.patients = action.payload;
        },
        fetchPatientsError(store, action: PayloadAction<string>) {
            store.status.isPatientsLoading = false;
            store.status.error = action.payload;
        },
    }
})

export const {
    fetchPatients,
    fetchPatientsSuccess,
    fetchPatientsError,

} = patients.actions;
export const patientsReducer = patients.reducer;