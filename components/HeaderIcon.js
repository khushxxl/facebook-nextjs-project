function HeaderIcon({ Icon }) {
  return (
    <div
      className=" flex items-center cursor-pointer  md:px-10
     md:hover:bg-gray-200  sm:h-14 active:border-b-2 rounded-xl
     active:border-blue-500 group"
    >
      <Icon
        src={Icon}
        className="h-5 group-hover:text-blue-500  text-gray-400 text-center sm:h-7 mx-auto"
      />
    </div>
  );
}

export default HeaderIcon;
