import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({ img, location, title, description, star, price, total }) {
  return (
    <div className="flex font-inter py-7 px-2 border-b cursor-pointer hover:shadow-lg pr-6 transition duration-200 ease-out first:border-t hover:bg-gray-300 mb-2">
      <div className="relative h-24 w-40 md:h-52 md:w-80 flex-shrink-0">
        <Image src={img} layout="fill" objectFit="cover" />
      </div>

      <div className="flex flex-col flex-grow pl-5">
        <div className="flex justify-between">
          <p>{location}</p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">{description}</p>

        <div className="flex justify-between items-end">
          <p className="flex items-center">
            <StarIcon className="h-5 text-red-400" />
            {star}
          </p>

          <div>
            <p className="text-lg pb-2 font-semibold lg:text-2xl">{price}</p>
            <p className="text-right font-light">{total}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default InfoCard;