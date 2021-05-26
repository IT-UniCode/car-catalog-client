import { deliveryCostApi, deliveryPortApi } from './config';

export const getDeliveryCostData = (city: string, state: string) =>
  deliveryCostApi.get(`/delivery?auction=copart&city=${city}&state=${state}`);

export const getDeliveryPortData = (location: string) =>
  deliveryPortApi.get(`delivery?auction=copart&destination=odessa&location=${location}&type=small
`);
