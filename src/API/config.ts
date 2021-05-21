import axios from 'axios';

const API_URL = process.env.REACT_APP_URL;
const REACT_APP_PRIVAT_API_URL = process.env.REACT_APP_PRIVAT_API_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});

export const currencyApi = axios.create({
  baseURL: REACT_APP_PRIVAT_API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});
