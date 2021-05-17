import api from './config';

export const getData = () => api.post(`/copartfilters`);
