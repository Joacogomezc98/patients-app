import { createSlice, PayloadAction } from "@reduxjs/toolkit";

import { NewPatient, Patient, patientsInitialState } from "./patients.types";

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
        addPatient(store, action: PayloadAction<NewPatient>) {
            const helper = store.patients
            // Get max ID + 1
            const newId = helper.length > 0 ? Math.max(...helper.map(patient => patient.id)) + 1 : 1;
            const createdAt = new Date()
            helper.push({ ...action.payload, id: newId, createdAt: createdAt })
        }

    }
})

export const {
    fetchPatients,
    fetchPatientsSuccess,
    fetchPatientsError,
    selectPatient,
    clearSelectedPatient,
    editPatient,
    deletePatient,
    addPatient
} = patients.actions;
export const patientsReducer = patients.reducer;