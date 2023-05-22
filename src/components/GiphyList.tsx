import GiphyItem from "./GiphyItem";

const GiphyList = () => {
  return (
    <div className="mb-32 grid gap-4 text-center lg:mb-0 lg:grid-cols-4 lg:text-left">
      {[1, 2, 3, 4].map((giphy, index) => {
        return <GiphyItem key={`giphy-${index}`} />;
      })}
    </div>
  );
};

export default GiphyList;
