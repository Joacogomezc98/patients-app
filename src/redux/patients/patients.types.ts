import { Status, statusInitialState } from "../store.types";

export interface Patient {
    createdAt: Date;
    name: string;
    avatar: string;
    description: string;
    website: string;
    id: number;
}

export interface Patients {
    status: Status;
    patients: Patient[]
}

export const patientsInitialState: Patients = {
    status: statusInitialState,
    patients: []
}