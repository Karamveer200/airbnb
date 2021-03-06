import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";
import searchData from "../public/Assets/searchData.json";
import InfoCard from "../components/InfoCard";
import Map from "../components/Map";

function Search({ searchData }) {
  const [searchInput, setSearchInput] = useState("");

  const router = useRouter();

  const { location, startDate, endDate, numberOfGuest } = router.query;

  const formattedStartDate = format(new Date(startDate), "dd MMMM yy");
  const formattedEndDate = format(new Date(endDate), "dd MMMM yy");

  const range = `${formattedStartDate} - ${formattedEndDate}`;

  return (
    <div className="h-screen font-inter">
      <Header
        searchInput={searchInput}
        setSearchInput={setSearchInput}
        placeholder={`${location} | ${range} | Guests - ${numberOfGuest}`}
      />

      <main className="flex">
        <section className="flex-grow px-6 pt-14">
          <p className="text-xs px-6 py-4 bg-gray-500 inline-block rounded-md text-white font-bold">
            20+ Stays -{" "}
            <span className="bg-red-400 px-2 py-1 rounded-md text-white">
              {range}
            </span>
            {"  "}- for{" "}
            <span className="bg-red-400 px-2 py-1 rounded-md text-white">
              {numberOfGuest}
            </span>
            {"  "}guests
          </p>
          <h1 className="text-3xl font-semibold mt-2 mb-6">
            Stay in {location}
          </h1>

          <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
            <p className="filter-button">Cancellation Policy</p>
            <p className="filter-button">Type of Place</p>
            <p className="filter-button">Price</p>
            <p className="filter-button">Rooms and Beds</p>
            <p className="filter-button">More Filters</p>
          </div>

          <div className="flex flex-col">
            {searchData.map((item, index) => (
              <InfoCard
                key={index}
                img={item.img}
                city={location}
                numberOfGuest={numberOfGuest}
                location={item.location}
                title={item.title}
                description={item.description}
                star={item.star}
                price={item.price}
                total={item.total}
              />
            ))}
          </div>
        </section>

        <section className="hidden xl:inline-flex xl:min-w-[600px]">
          <Map searchResults={searchData} />
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Search;

export async function getServerSideProps() {
  //Use context object here when we use to use query to make api calls
  return { props: { searchData } };
}
