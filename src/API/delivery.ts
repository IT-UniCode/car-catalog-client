import { deliveryApi } from './config';

export const getDeliveryData = (city: string, state: string) => deliveryApi.get(`/delivery?auction=copart&city=${city}&state=${state}`);
