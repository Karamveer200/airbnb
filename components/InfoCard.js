import React from "react";
import Image from "next/image";
import { HeartIcon } from "@heroicons/react/outline";
import { StarIcon } from "@heroicons/react/solid";

function InfoCard({
  img,
  location,
  title,
  description,
  star,
  price,
  total,
  city,
  numberOfGuest,
}) {
  return (
    <div className="flex flex-col md:flex-row font-inter py-7 px-2 border-b rounded-xl cursor-pointer hover:shadow-lg pr-6 transition duration-200 ease-out first:border-t hover:bg-red-100 mb-2">
      <div className="relative h-40 w-64 md:h-52 md:w-80 flex-shrink-0 ml-6">
        <Image
          src={img}
          layout="fill"
          objectFit="cover"
          className="rounded-2xl"
        />
      </div>

      <div className="flex flex-col flex-grow pl-5 ml-2 mt-2 md:mt-0">
        <div className="flex justify-between">
          <p>
            {location} {city}
          </p>
          <HeartIcon className="h-7 cursor-pointer" />
        </div>

        <h4 className="text-xl">{title}</h4>

        <div className="border-b w-10 pt-2" />

        <p className="pt-2 text-sm text-gray-500 flex-grow">
          {numberOfGuest}
          {description}
        </p>

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
