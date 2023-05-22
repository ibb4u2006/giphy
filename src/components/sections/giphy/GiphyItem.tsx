import Image from 'next/image';

type GiphyItemProps = {
  src: string;
  alt: string;
};

const GiphyItem: React.FC<GiphyItemProps> = ({ src, alt }) => {
  return (
    <div className="w-52 h-52 rounded-lg outline transition-colors hover:dark:border-neutral-700 hover:outline-yellow-200">
      <Image
        src={src}
        alt={alt}
        width={200}
        height={200}
        priority
        className="w-full h-full object-cover"
      />
    </div>
  );
};

export default GiphyItem;
