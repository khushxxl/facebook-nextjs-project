import Image from "next/image";
function StoryCard({ src, profile, name }) {
  return (
    <div
      className="relative h-14 w-14 md:h-20 md:w-20 lg:h-56 lg:w-32 cursor-pointer overflow-x p-3 transition duration-200 transform ease-in
      hover:scale-105 hover:animate-pulse "
    >
      <Image
        className="absolute opacity-0 lg:opacity-100 rounded-full z-50 top-10"
        src={profile}
        alt=""
        width={40}
        height={40}
        objectFit="cover"
        layout="fixed"
      />
      <Image
        src={src}
        alt=""
        layout="fill"
        className="object-cover filter brightness-75 rounded-full lg:rounded-3xl"
      />
    </div>
  );
}

export default StoryCard;
