import {currencyApi} from './config';

export const getCurrencyData = (id: number) => currencyApi.get(`/pubinfo?json&exchange&coursid=${id}`);
