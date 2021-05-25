import axios from 'axios';

const API_URL = process.env.REACT_APP_URL;
const PRIVAT_API_URL = process.env.REACT_APP_PRIVAT_API_URL;
const DELIVERY_URL = process.env.REACT_APP_DELIVERY_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});

export const currencyApi = axios.create({
  baseURL: PRIVAT_API_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});

export const deliveryApi = axios.create({
  baseURL: DELIVERY_URL,
  headers: {
    'Content-Type': 'application/json',
    accept: 'text/plain',
  },
});
