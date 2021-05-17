import api from './config';

export const getData = () => api.post(`/copartfilters`);

export const getDataById = (id: string) => api.get(`/copartlots/${id}`);
