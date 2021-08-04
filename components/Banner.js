import React from "react";
import Image from "next/image";

function Banner() {
  return (
    <div className="relative h-[300px] sm:h-[400px] lg:h-[550px] font-inter">
      <Image
        src="/Assets/hero.webp"
        alt="Logo"
        layout="fill"
        objectFit="fill"
      />

      <div className="absolute top-1/2 w-full text-center">
        <p className="text-sm sm:text-lg font-bold">
          Not sure where to go? Perfect.
        </p>
        <button
          className="text-white font-bold bg-red-400 px-10 py-4 shadow-lg rounded-full my-4 hover:shadow-xl
        hover:scale-75 transition duration-150"
        >
          Explore Below
        </button>
      </div>
    </div>
  );
}

export default Banner;
