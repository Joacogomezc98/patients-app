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
        selectPatient(store, action: PayloadAction<Patient>) {
            store.selectedPatient = action.payload
        },
        clearSelectedPatient(store) {
            store.selectedPatient = null
        },
        editPatient(store, action: PayloadAction<Patient>) {
            const target = store.patients.findIndex(p => p.id === action.payload.id)
            store.patients[target] = action.payload
            store.selectedPatient = action.payload
        },
        deletePatient(store, action: PayloadAction<number>) {
            store.patients = store.patients.filter((p) => p.id !== action.payload);
            if (store.selectedPatient?.id === action.payload) {
                store.selectedPatient = null;
            }
        },

    }
})

export const {
    fetchPatients,
    fetchPatientsSuccess,
    fetchPatientsError,
    selectPatient,
    clearSelectedPatient,
    editPatient,
    deletePatient
} = patients.actions;
export const patientsReducer = patients.reducer;