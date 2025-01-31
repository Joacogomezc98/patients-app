import React from 'react';
import { Patient } from '../../api';
import { PatientCard } from '../../components/PatientCard';
import { Container, ListContainer, Title } from './style';

interface Props {
  patients: Patient[];
}

export const Main: React.FC<Props> = ({ patients }) => {
  return (
    <Container>
      <Title>Patients Portal</Title>
      <ListContainer>
        {patients.map((p) => (
          <PatientCard patient={p} />
        ))}
      </ListContainer>
    </Container>
  );
};
