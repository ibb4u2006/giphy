import { AxiosResponse } from 'axios';
import axiosClient from './axios';
import { API_ROUTES } from '@/constants/routes';
import { GiphyAPIResponse, Pagination } from '@/types/response';

export const searchGifs = async (
  pagination: Partial<Pagination>
): Promise<AxiosResponse<GiphyAPIResponse>> => {
  return await axiosClient.get(API_ROUTES.searchGifs(), { params: pagination });
};
