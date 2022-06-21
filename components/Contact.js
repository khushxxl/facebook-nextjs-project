import Image from "next/image";

function Contact({ src, name }) {
  return (
    <div className="flex items-center space-x-3 mb-2 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl ">
      <Image
        src={src}
        alt={name}
        width={50}
        height={50}
        className="rounded-full"
        layout="fixed"
        objectFit="cover"
      />
      <p>{name}</p>
      <div className="absolute bottom-2 left-7 bg-green-400 h-3 w-3 rounded-full" />
    </div>
  );
}

export default Contact;
