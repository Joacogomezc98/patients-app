import { useEffect, useState } from 'react';
import { getPatientsData, Patient } from './api';
import { Main } from './layouts/Main';

export const App = () => {
  const [patientsData, setPatientsData] = useState<Patient[]>([]);

  useEffect(() => {
    getPatientsData().then((res) => setPatientsData(res.data));
  }, []);

  return <Main patients={patientsData} />;
};
