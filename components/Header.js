import Image from "next/image";
import HeaderIcon from "./HeaderIcon";
import {
  FlagIcon,
  HomeIcon,
  PlayIcon,
  ShoppingCartIcon,
  UserGroupIcon,
} from "@heroicons/react/outline";
import { SearchIcon } from "@heroicons/react/outline";
import {
  ViewGridIcon,
  ChatIcon,
  BellIcon,
  ChevronDownIcon,
} from "@heroicons/react/solid";
import { useSession, signOut } from "next-auth/client";

function Header() {
  const [session] = useSession();
  return (
    <div className="sticky top-0 z-50 bg-white flex items-center p-2 lg:px-5 shadow-md">
      {/* Left */}

      <div className="flex items-center">
        <Image
          src="https://links.papareact.com/5me"
          width={40}
          height={40}
          layout="fixed"
          alt=""
        />

        <div className="flex ml-2 items-center rounded-full bg-gray-100 p-2 ">
          <SearchIcon className="h-6 text-gray-500" />
          <input
            className="hidden  md:inline-flex ml-2  bg-transparent items-center outline-none flex-shrink "
            type="text"
            placeholder="Search Facebook"
          />
        </div>
      </div>

      {/* Center */}

      <div className="flex justify-center flex-grow ">
        <div className="flex space-x-6 md:space-x-2">
          <HeaderIcon Icon={HomeIcon} />
          <HeaderIcon Icon={FlagIcon} />
          <HeaderIcon Icon={PlayIcon} />
          <HeaderIcon Icon={ShoppingCartIcon} />
          <HeaderIcon Icon={UserGroupIcon} />
        </div>
      </div>

      {/* RIGHT  */}
      <div className="flex items-center sm:space-x-2 justify-end ">
        <Image
          onClick={signOut}
          src={session.user.image}
          alt=""
          height={40}
          width={40}
          layout="fixed"
          className="rounded-full cursor-pointer p-2"
        />
        <p className="whitespace-nowrap font-semibold pr-3">
          {session.user.name}
        </p>
        <ViewGridIcon className="icon" />
        <ChatIcon className="icon" />
        <BellIcon className="icon" />
        <ChevronDownIcon className="icon" />
      </div>
    </div>
  );
}

export default Header;
