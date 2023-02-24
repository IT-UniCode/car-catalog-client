import axios from "axios";

const API_URL = process.env.REACT_APP_URL;
const PRIVAT_API_URL = process.env.REACT_APP_PRIVAT_API_URL;
const DELIVERY_COST_URL = process.env.REACT_APP_DELIVERY_COST_URL;
const DELIVERY_PORT_URL = process.env.REACT_APP_DELIVERY_PORT_URL;

export const api = axios.create({
  baseURL: API_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "text/plain",
  },
});

export const currencyApi = axios.create({
  baseURL: PRIVAT_API_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "application/json",
  },
});

export const deliveryCostApi = axios.create({
  baseURL: DELIVERY_COST_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "text/plain",
  },
});

export const deliveryPortApi = axios.create({
  baseURL: DELIVERY_PORT_URL,
  headers: {
    "Content-Type": "application/json",
    accept: "text/plain",
  },
});
