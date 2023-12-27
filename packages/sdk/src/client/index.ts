import axios, { Axios } from 'axios';
import fetchAdapter from '@vespaiach/axios-fetch-adapter';
import { resolveBaseUrl } from './resolvers';

const client = new Proxy(axios.create(), {
  get: (axiosInstance, property) => {
    axiosInstance.defaults.withCredentials = true;
    axiosInstance.defaults.adapter = fetchAdapter;
    axiosInstance.defaults.baseURL = resolveBaseUrl();

    return axiosInstance[property as keyof Axios];
  },
});

export { client };
