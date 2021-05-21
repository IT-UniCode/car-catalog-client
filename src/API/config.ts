import axios from 'axios';

const API_URL = process.env.REACT_APP_URL;
const CURRENCY_API_URL = process.env.REACT_CURRENCY_API_URL;

console.log(API_URL);

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});

export const currencyApi = axios.create({
  baseURL: CURRENCY_API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});
