import React from 'react';
import { PatientCard } from '../../components/PatientCard';
import {
  Container,
  ListContainer,
  LoaderContainer,
  Spinner,
  Title,
} from './style';
import { Patient } from '../../redux/patients/patients.types';
import { useSelector } from 'react-redux';
import {
  selectActivePatient,
  selectPatientsStatus,
} from '../../redux/patients/selectors';
import { PatientModal } from '../../components/PatientModal';

interface Props {
  patients: Patient[];
}

export const Main: React.FC<Props> = ({ patients }) => {
  const patientStatus = useSelector(selectPatientsStatus);
  const activePatient = useSelector(selectActivePatient);

  return (
    <Container>
      <Title>Patients Portal</Title>
      <ListContainer>
        {patientStatus.isPatientsLoading ? (
          <LoaderContainer>
            <Spinner />
          </LoaderContainer>
        ) : (
          patients.map((p) => <PatientCard patient={p} />)
        )}
      </ListContainer>

      {activePatient && <PatientModal />}
    </Container>
  );
};
