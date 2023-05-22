import GiphyList from '@/components/sections/GiphyList';
import SearchInput from '@/components/sections/SearchInput';
import { useGetGifs } from '@/hooks/useSearch';

export default function Home() {
  const { data, isLoading, error } = useGetGifs({
    q: 'praha',
    limit: 8,
    offset: 2,
  });
  const giphyData = data?.data.data ?? [];
  return (
    <>
      <div className="my-10" />
      <SearchInput />
      <div className="my-10" />
      <GiphyList data={giphyData} />
    </>
  );
}
