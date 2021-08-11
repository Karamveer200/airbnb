import React, { useState } from "react";
import Image from "next/image";
import {
  GlobeAltIcon,
  MenuIcon,
  SearchIcon,
  UserCircleIcon,
  UserIcon,
} from "@heroicons/react/solid";
import "react-date-range/dist/styles.css"; // main style file
import "react-date-range/dist/theme/default.css"; // theme css file
import { DateRangePicker } from "react-date-range";
import { useRouter } from "next/dist/client/router";

function Header({ searchInput, setSearchInput, placeholder }) {
  const [startDate, setStartDate] = useState(new Date());
  const [endDate, setEndDate] = useState(new Date());
  const [numberOfGuest, setNumGuest] = useState(1);

  const router = useRouter();

  const selectionRange = {
    startDate: startDate,
    endDate: endDate,
    key: "selection",
  };

  const handleSelect = (ranges) => {
    setStartDate(ranges.selection.startDate);
    setEndDate(ranges.selection.endDate);
  };

  const resetInput = () => {
    setSearchInput("");
  };

  const search = () => {
    router.push({
      pathname: "/search",
      query: {
        location: searchInput,
        startDate: startDate.toISOString(),
        endDate: endDate.toISOString(),
        numberOfGuest,
      },
    });

    resetInput();
  };

  return (
    <header className="sticky top-0 z-50 grid grid-cols-3 backdrop-blur-3xl shadow-md py-3 px-2 md:px-10 ">
      {/* LEFT */}
      <div className="relative flex h-10 cursor-pointer">
        <Image
          src="/Assets/logo.webp"
          alt="Logo"
          layout="fill"
          objectFit="contain"
          objectPosition="left"
          onClick={() => router.push("/")}
        />
      </div>

      {/* Middle */}
      <div className="flex items-center md:border-2 rounded-full md:shadow-md border-gray-400">
        <input
          type="text"
          placeholder={placeholder || "Search here"}
          value={searchInput}
          autoComplete="off"
          onChange={(e) => setSearchInput(e.target.value)}
          className="pl-5 h-8 text-gray-600 font-semibold md:focus:bg-white rounded-full ml-1 outline-none flex-grow mr-2 pr-5 bg-transparent"
        />
        <SearchIcon className="hidden lg:inline-flex h-8 bg-red-400 text-white rounded-full p-2 cursor-pointer md:mx-2" />
      </div>

      {/* Right */}
      <div className="flex space-x-4 items-center justify-end text-gray-600 font-inter">
        <div className="flex space-x-4 items-center bg-white px-4 py-2 rounded-full border-2 border-gray-600">
          <p className="hidden md:inline-flex text-sm lg:text-base">
            Become a Host
          </p>
          <GlobeAltIcon className="h-6" />
        </div>

        <div className="flex items-center space-x-2 border-2 p-2 bg-white rounded-full border-gray-400">
          <MenuIcon className="h-6" />
          <UserCircleIcon className="h-6" />
        </div>
      </div>

      {searchInput && (
        <div className="flex flex-col col-span-3 mx-auto border-2 rounded mt-4 border-red-600 transform transition ease-in">
          <DateRangePicker
            className="bg-gray-900"
            ranges={[selectionRange]}
            minDate={new Date()}
            rangeColors={["#FD5B61"]}
            onChange={handleSelect}
          />

          <div className="bg-white flex items-center border-4 border-gray-400 pl-6 pr-4">
            <h2 className="text-2xl flex-grow font-semibold">
              Number of Guests -
            </h2>

            <UserIcon className="h-5 mr-2" />
            <input
              type="number"
              value={numberOfGuest}
              min={1}
              onChange={(e) => setNumGuest(e.target.value)}
              className="w-16 text-lg outline-none text-red-400 border-4 pl-2"
            />
          </div>
          <div className="flex py-4 px-20 bg-gray-400">
            <button
              className="flex-grow rounded-full text-white bg-gray-600 p-2 mr-6 hover:font-semibold hover:bg-black"
              onClick={resetInput}
            >
              Cancel
            </button>
            <button
              className="flex-grow rounded-full  bg-red-400 p-2 ml-6 hover:bg-red-500 text-white hover:font-semibold"
              onClick={search}
            >
              Search
            </button>
          </div>
        </div>
      )}
    </header>
  );
}

export default Header;
