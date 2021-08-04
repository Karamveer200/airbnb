import React from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
} from "@heroicons/react/solid";

function Header() {
  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 bg-red-00 shadow-md py-3 px-5 md:px-10 ">
      {/* LEFT */}
      <div className="relative flex h-10 cursor-pointer">
        <Image
          src="/Assets/logo.webp"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-md border-gray-400">
        <input
          type="text"
          placeholder="Search here"
          className="pl-5 h-8 rounded-full ml-1 outline-none flex-grow mr-2 pr-5 bg-transparent"
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-600 font-inter">
        <p className="hidden md:inline-flex">Become a Host</p>
        <GlobeAltIcon className="h-6" />

        <div className="flex items-center space-x-2 border-2 p-2 rounded-full border-gray-400">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>
    </header>
  );
}

export default Header;
