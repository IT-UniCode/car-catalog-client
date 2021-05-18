import api from './config';

export const getData = (body: any) => api.post(`/copartfilters`, {
  ...body,
});

export const getDataById = (id: string) => api.get(`/copartlots/${id}`);
