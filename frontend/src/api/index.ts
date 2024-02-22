import axios from 'axios';

const api = axios.create({
  baseURL: 'https://seahorse-app-nbto8.ondigitalocean.app/',
  withCredentials: true,
});

export default api;
