import { searchGifs } from '@/components/api/search';
import { SEARCH_GIFS_QUERY } from '@/constants/queries';
import { Pagination } from '@/types/response';
import { useQuery } from 'react-query';

export const useGetGifs = (params: Partial<Pagination>) => {
  return useQuery([SEARCH_GIFS_QUERY], async () => searchGifs({ ...params }));
};
