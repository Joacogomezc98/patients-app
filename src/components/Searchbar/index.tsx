import React, { useEffect, useState } from 'react';
import { Patient } from '../../redux/patients/patients.types';
import { Container, SearchInput } from './style';
import { getIcons } from '../../utils/utils';

interface Props {
  patients: Patient[];
  setPatientsList: React.Dispatch<React.SetStateAction<Patient[]>>;
}

export const SearchBar: React.FC<Props> = ({ setPatientsList, patients }) => {
  const [search, setSearch] = useState('');

  const handleChange = (e: string) => {
    setSearch(e);
  };

  //Filter the patients list based on the search input (if search is empty, show all patients)
  useEffect(() => {
    if (search === '') {
      setPatientsList(patients);
    } else {
      const newArr = patients.filter((patient) =>
        patient.name?.toLowerCase().includes(search.toLowerCase()),
      );
      setPatientsList([...newArr]);
    }
  }, [search, patients]);

  return (
    <Container>
      <SearchInput>
        {getIcons('search')}
        <input
          placeholder="Search for any patient..."
          onChange={(e) => handleChange(e.target.value)}
        />
      </SearchInput>
    </Container>
  );
};
