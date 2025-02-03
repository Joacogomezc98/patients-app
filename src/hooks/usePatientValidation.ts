import { useState } from "react";
import { NewPatient, Patient } from "../redux/patients/patients.types";

export const usePatientValidation = () => {
    const [errors, setErrors] = useState<{ name?: string; website?: string; description?: string }>({});

    const validate = (patient: Patient | NewPatient | null) => {
        const newErrors: { name?: string; website?: string; description?: string, avatar?: string } = {};

        if (!patient?.name || patient.name.trim().length < 3) {
            newErrors.name = "Name must be at least 3 characters long.";
        }

        if (patient?.website && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(patient.website)) {
            newErrors.website = "Enter a valid URL (http:// or https://).";
        }

        if (patient?.avatar && !/^https?:\/\/[^\s$.?#].[^\s]*$/.test(patient.avatar)) {
            newErrors.avatar = "Enter a valid URL (http:// or https://).";
        }

        if (!patient?.description || patient.description.trim().length < 10) {
            newErrors.description = "Description must be at least 10 characters long.";
        }

        setErrors(newErrors);
        return Object.keys(newErrors).length === 0; // Return true if valid
    };

    return { errors, validate };
};
