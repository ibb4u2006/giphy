import Image from "next/image";

const GiphyItem = () => {
  return (
    <Image
      className="group rounded-lg border border-transparent transition-colors hover:border-gray-300 hover:bg-gray-100 hover:dark:border-neutral-700 hover:dark:bg-neutral-800/30"
      src="https://media1.giphy.com/avatars/kingofboysmovie/9kSGEHdkm6Ap.jpg"
      alt="Image"
      width={200}
      height={200}
      priority
    />
  );
};

export default GiphyItem;
