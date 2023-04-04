import axios, { AxiosInstance } from 'axios';
import Config from 'react-native-config';

const config = {
  baseURL: Config.API_URL,
  timeout: 10000,
};

const apiClient: AxiosInstance = axios.create(config);

apiClient.interceptors.request.use(
  config => {
    const token = '';
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  error => {
    return Promise.reject(error);
  },
);

apiClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response.status === 401) {
    }
    return Promise.reject(error);
  },
);

export default apiClient;
