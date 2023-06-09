import { ChangeEvent } from 'react';

type SearchInputProps = {
  defaultValue: string;
  onSearchInputChange: (input: string) => void;
};

const SearchInput: React.FC<SearchInputProps> = ({
  defaultValue,
  onSearchInputChange,
}) => {
  const handleSearchInputChange = (event: ChangeEvent<HTMLInputElement>) => {
    onSearchInputChange(event.target.value);
  };
  return (
    //TODO: Set min width for very small screen
    <div className="relative flex w-full max-w-xs place-items-center before:absolute before:h-[300px] before:w-full before:sm:w-[480px] before:-translate-x-1/2 before:rounded-full before:bg-gradient-radial before:from-white before:to-transparent before:blur-2xl before:content-[''] after:absolute after:-z-20 after:h-[180px] after:w-[240px] after:translate-x-1/3 after:bg-gradient-conic after:from-sky-200 after:via-blue-200 after:blur-2xl after:content-[''] before:dark:bg-gradient-to-br before:dark:from-transparent before:dark:to-blue-700/10 after:dark:from-sky-900 after:dark:via-[#0141ff]/40 before:lg:h-[360px] after:hidden after:sm:block">
      <input
        className="relative px-4 dark:drop-shadow-[0_0_0.3rem_#ffffff70] light:invert h-14 rounded-md text-black w-full"
        type="search"
        placeholder="Search Giphs"
        defaultValue={defaultValue}
        onChange={handleSearchInputChange}
      />
    </div>
  );
};

export default SearchInput;
