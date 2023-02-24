import { currencyApi } from "./config";

export const getCurrencyData = (id: number) =>
  currencyApi.get(`?exchange&coursid=${id}`);
