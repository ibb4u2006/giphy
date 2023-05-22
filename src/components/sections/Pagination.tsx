import { GiphyAPIResponse } from '@/types/response';
import Button from '../ui/Button';
import Stack from '../ui/Stack';

type PaginationProps = {
  pagination: GiphyAPIResponse['pagination'];
  page: number;
  pageSize: number;
  onPageChange: (page: number) => void;
};
const Pagination: React.FC<PaginationProps> = ({
  pagination,
  page,
  pageSize,
  onPageChange,
}) => {
  const totalItem = pagination?.total_count ?? 0;

  const totalPage = Math.ceil(totalItem / pageSize);
  const isLastPage = page + 1 === totalPage;

  const handleNextClick = () => {
    if (!isLastPage) {
      onPageChange(page + 1);
    }
  };
  const handlePreviousClick = () => {
    if (page > 0) {
      onPageChange(page - 1);
    }
  };
  return (
    <Stack direction="horizontal" className="items-center gap-5">
      <Button onClick={handlePreviousClick} disabled={page === 0}>
        Prev
      </Button>
      <p>{`Page ${page + 1} of ${totalPage}`}</p>
      <Button onClick={handleNextClick} disabled={isLastPage}>
        Next
      </Button>
    </Stack>
  );
};

export default Pagination;
