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
import { selectPatientsStatus } from '../../redux/patients/selectors';

interface Props {
  patients: Patient[];
}

export const Main: React.FC<Props> = ({ patients }) => {
  const patientStatus = useSelector(selectPatientsStatus);

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
    </Container>
  );
};
