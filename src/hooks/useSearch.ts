import { searchGifs } from '@/components/api/search';
import { SEARCH_GIFS_QUERY } from '@/constants/queries';
import { GiphyAPIResponse, Pagination } from '@/types/response';
import { AxiosError, AxiosResponse } from 'axios';
import { useQuery } from 'react-query';

export const useGetGifs = (params: Partial<Pagination>) => {
  return useQuery<AxiosResponse<GiphyAPIResponse>, AxiosError>(
    [SEARCH_GIFS_QUERY],
    async () => searchGifs({ ...params }),
    { refetchOnWindowFocus: false }
  );
};
