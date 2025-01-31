import { useEffect } from 'react';
import { Main } from './layouts/Main';
import { selectPatients } from './redux/patients/selectors';
import { useDispatch, useSelector } from 'react-redux';
import { fetchPatients } from './redux/patients/patients.slice';

export const App = () => {
  const patientsData = useSelector(selectPatients);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchPatients());
  }, []);

  useEffect(() => {
    console.log(patientsData);
  }, [patientsData]);

  return <Main patients={patientsData} />;
};
