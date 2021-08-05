import React from "react";
import Image from "next/image";

function Banner({ searchInput }) {
  return (
    <div
      className={`relative h-[300px] sm:h-[400px] lg:h-[550px] xl:h-[750px] font-inter ${
        searchInput ? "-mt-200" : "-mt-20"
      } `}
    >
      <Image
        src="/Assets/hero.webp"
        alt="Logo"
        layout="fill"
        objectFit="fill"
      />

      <div className="absolute top-1/4 text-left left-10 md:left-20 mt-20 ">
        <p className="text-base md:text-xl lg:text-4xl xl:text-6xl font-bold text-white max-w-[120px] md:max-w-md">
          Not sure where to go? Perfect.
        </p>
        <p className="text-sm md:text-xl lg:text-3xl xl:text-5xl mt-2 md:mt-10 font-bold text-white">
          We have got you covered
        </p>
        <button
          className="text-white font-bold bg-red-500 md:px-10 md:py-4 px-4 py-2 shadow-lg rounded-full my-4 hover:shadow-xl
        hover:scale-110 transition duration-300 hover:text-gray-800 hover:bg-purple-400"
        >
          Explore Below
        </button>
      </div>
    </div>
  );
}

export default Banner;
