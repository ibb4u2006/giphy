import GiphyList from '@/components/sections/GiphyList';
import Pagination from '@/components/sections/Pagination';
import SearchInput from '@/components/sections/SearchInput';
import Loader from '@/components/ui/Loader';
import { useGetGifs } from '@/hooks/useSearch';
import { GiphyAPIResponse } from '@/types/response';
import { useEffect, useState } from 'react';

export default function Home() {
  const pageSize = 20;

  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);

  const { data, isLoading, isFetching, refetch, error } = useGetGifs({
    q: 'yoruba',
    limit: pageSize,
    offset,
  });

  const giphyData = data?.data.data ?? [];

  const { pagination } = data?.data ?? {};

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setOffset(page * pageSize);
  }, [page, pageSize]);

  useEffect(() => {
    refetch();
  }, [offset]);

  return (
    <Loader isLoading={isLoading || isFetching}>
      <div className="my-10" />
      <SearchInput />
      <div className="my-10" />
      <GiphyList data={giphyData} />
      <div className="my-10" />
      <Pagination
        pagination={pagination as GiphyAPIResponse['pagination']}
        page={page}
        pageSize={pageSize}
        onPageChange={handlePageChange}
      />
    </Loader>
  );
}
