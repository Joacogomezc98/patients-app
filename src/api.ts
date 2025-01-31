import axios from 'axios';

const apiUrl: string = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';

export const getPatientsData = () => axios.get(apiUrl)
  .then((res) => res.data)
  .catch(() => { throw new Error })
