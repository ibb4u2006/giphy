import { Data } from '@/types/response';
import GiphyItem from './giphy/GiphyItem';

type GiphyListProps = {
  data: Data[];
};
const GiphyList: React.FC<GiphyListProps> = ({ data }) => {
  return (
    <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:grid-cols-4 lg:text-left justify-center items-center">
      {data.map((giphy) => {
        return (
          <GiphyItem
            key={giphy.id}
            src={giphy.images.original.url}
            alt={giphy.username}
          />
        );
      })}
    </div>
  );
};

export default GiphyList;
