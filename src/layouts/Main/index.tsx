import React, { useState } from 'react';
import { PatientCard } from '../../components/PatientCard';
import {
  Container,
  ListContainer,
  LoaderContainer,
  Spinner,
  Title,
  TitleContainer,
  ToolsContainers,
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
import { getIcons } from '../../utils/utils';
import { SearchBar } from '../../components/Searchbar';
import { EmptyList } from '../../components/EmptyList';

interface Props {
  patients: Patient[];
}

export const Main: React.FC<Props> = ({ patients }) => {
  const patientStatus = useSelector(selectPatientsStatus);
  const activePatient = useSelector(selectActivePatient);

  const [openModal, setOpenModal] = useState<boolean>(false);

  const [searchedPatients, setSearchedPatients] = useState<Patient[]>([]);

  const handleNewPatient = () => {
    setOpenModal(true);
  };

  const handleCloseForm = () => {
    setOpenModal(false);
  };

  return (
    <Container>
      <TitleContainer>
        <Title>
          <img src="logo.png" alt="logo" />
          Patients Portal
        </Title>
        <ToolsContainers>
          <SearchBar
            patients={patients}
            setPatientsList={setSearchedPatients}
          />
          <Actionbutton
            icon={getIcons('add')}
            text="Add Patient"
            textColor="white"
            backgroundColor="rgb(36 99 235)"
            onClick={handleNewPatient}
          />
        </ToolsContainers>
      </TitleContainer>
      <ListContainer>
        {patientStatus.isPatientsLoading ? (
          <LoaderContainer>
            <Spinner />
          </LoaderContainer>
        ) : searchedPatients.length === 0 ? (
          <EmptyList name="patients" />
        ) : (
          searchedPatients.map((p) => <PatientCard patient={p} />)
        )}
      </ListContainer>

      {activePatient && <PatientModal />}
      {openModal && <AddPatientForm onClose={handleCloseForm} />}
    </Container>
  );
};
