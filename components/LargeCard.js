import React from "react";
import Image from "next/image";

function LargeCard({ img, title, desc, buttonText }) {
  return (
    <div className="relative py-16 cursor-pointer ">
      <div className="relative h-96 ">
        <Image
          src={img}
          layout="fill"
          className="rounded-lg"
          objectFit="cover"
        />
      </div>

      <div className="absolute top-32 left-12">
        <h3 className="text-2xl lg:text-4xl mb-3 w-64">{title}</h3>
        <p>{desc}</p>
        <button className="text-sm lg:text-lg text-white bg-gray-900 px-4 py-2 rounded-lg mt-5">
          {buttonText}
        </button>
      </div>
    </div>
  );
}

export default LargeCard;
