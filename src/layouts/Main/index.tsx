import React, { useState } from 'react';
import { PatientCard } from '../../components/PatientCard';
import {
  Container,
  ListContainer,
  LoaderContainer,
  Spinner,
  Title,
  Toolbar,
} from './style';
import { Patient } from '../../redux/patients/patients.types';
import { useSelector } from 'react-redux';
import {
  selectActivePatient,
  selectPatientsStatus,
} from '../../redux/patients/selectors';
import { PatientModal } from '../../components/PatientModal';
import { Actionbutton } from '../../components/Button';
import { AddPatientForm } from '../../components/AddForm';

interface Props {
  patients: Patient[];
}

export const Main: React.FC<Props> = ({ patients }) => {
  const patientStatus = useSelector(selectPatientsStatus);
  const activePatient = useSelector(selectActivePatient);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const handleNewPatient = () => {
    setOpenModal(true);
  };

  const handleCloseForm = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <Title>Patients Portal</Title>
      <Toolbar>
        <Actionbutton
          text="+ Add Patient"
          textColor="white"
          backgroundColor="black"
          onClick={handleNewPatient}
        />
      </Toolbar>
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
      {openModal && <AddPatientForm onClose={handleCloseForm} />}
    </Container>
  );
};
