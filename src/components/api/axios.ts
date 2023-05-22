import axios, { AxiosHeaderValue, HeadersDefaults } from 'axios';

const axiosClient = axios.create();
axiosClient.defaults.params = {};

axiosClient.defaults.baseURL = process.env.NEXT_PUBLIC_API_URL ?? '';
axiosClient.defaults.params['api_key'] = process.env.NEXT_PUBLIC_API_KEY ?? '';

interface AxiosDefaultHeaders extends HeadersDefaults {
  'Content-Type': string;
  Accept: string;
  Authorization: string;
}

axiosClient.defaults.headers = {
  'Content-Type': 'application/json',
  Accept: 'application/json',
} as AxiosDefaultHeaders & {
  [key: string]: AxiosHeaderValue;
};

export default axiosClient;
