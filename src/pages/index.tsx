import GiphyList from '@/components/sections/GiphyList';
import Pagination from '@/components/sections/Pagination';
import SearchInput from '@/components/sections/SearchInput';
import Alert from '@/components/ui/Alert';
import Loader from '@/components/ui/Loader';
import { useDebounce } from '@/hooks/useDebounce';
import { useGetGifs } from '@/hooks/useSearch';
import { GiphyAPIResponse } from '@/types/response';
import { useEffect, useState } from 'react';

export default function Home() {
  const pageSize = 20;

  const [searchString, setSearchString] = useState('yoruba');
  const [page, setPage] = useState(0);
  const [offset, setOffset] = useState(0);

  const debouncedString = useDebounce(searchString, 500);

  const { data, isLoading, isFetching, refetch, error } = useGetGifs({
    q: debouncedString,
    limit: pageSize,
    offset,
  });

  const giphyData = data?.data.data ?? [];
  const { pagination } = data?.data ?? {};

  const handleSearchInputChange = (input: string) => {
    setSearchString(input);
  };

  const handlePageChange = (page: number) => {
    setPage(page);
  };

  useEffect(() => {
    setOffset(page * pageSize);
  }, [page, pageSize]);

  useEffect(() => {
    refetch();
  }, [offset]);

  useEffect(() => {
    setPage(0);
    setOffset(0);
    refetch();
  }, [debouncedString]);

  return (
    <>
      <div className="mt-5 absolute top-16 -translate-x-1/2  left-1/2 lg:top-20 z-10">
        <SearchInput
          defaultValue={debouncedString}
          onSearchInputChange={handleSearchInputChange}
        />
      </div>
      <Loader isLoading={isLoading || isFetching}>
        {error && (
          <>
            <Alert variant="error">
              <p>Something went wrong!</p>
            </Alert>
          </>
        )}
        {giphyData && giphyData.length > 1 ? (
          <>
            <div className="mt-12 lg:mt-0" />
            <GiphyList data={giphyData} />
            <Pagination
              pagination={pagination as GiphyAPIResponse['pagination']}
              page={page}
              pageSize={pageSize}
              onPageChange={handlePageChange}
            />
          </>
        ) : (
          <>No Giphs</>
        )}
        <div className="my-3" />
      </Loader>
    </>
  );
}
