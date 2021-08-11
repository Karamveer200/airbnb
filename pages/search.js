import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useRouter } from "next/dist/client/router";
import { format } from "date-fns";

function Search() {
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

      <main className="flex"></main>
      <section className="flex-grow px-6 pt-14">
        <p className="text-xs">
          300+ Stays - {range} - for {numberOfGuest} guests
        </p>
        <h1 className="text-3xl font-semibold mt-2 mb-6">Stay in {location}</h1>

        <div className="hidden md:inline-flex mb-5 space-x-3 text-gray-800 whitespace-nowrap">
          <p className="filter-button">Cancellation Policy</p>
          <p className="filter-button">Type of Place</p>
          <p className="filter-button">Price</p>
          <p className="filter-button">Rooms and Beds</p>
          <p className="filter-button">More Filters</p>
        </div>
      </section>
      <Footer />
    </div>
  );
}

export default Search;
