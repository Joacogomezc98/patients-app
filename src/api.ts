import axios from 'axios';

const apiUrl: string = 'https://63bedcf7f5cfc0949b634fc8.mockapi.io/users';

export interface Patient {
  createdAt: Date;
  name: string;
  avatar: string;
  description: string;
  website: string;
  id: number;
}

export const getPatientsData = () => axios.get(apiUrl);
