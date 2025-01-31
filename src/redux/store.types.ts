import { Patients } from "./patients/patients.types";

export interface Status {
    isPatientsLoading: boolean;
    error: string | null;
}

export const statusInitialState = {
    isPatientsLoading: false,
    error: null
}

export interface Store {
    patients: Patients
}
