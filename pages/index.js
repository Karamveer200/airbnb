import Head from "next/head";
import Banner from "../components/Banner";
import Header from "../components/Header";
import SmallCard from "../components/SmallCard";
import MediumCard from "../components/MediumCard";
import ExploreData from "../public/Assets/explore.json";
import liveAnywhere from "../public/Assets/liveAnywhere.json";
import LargeCard from "../components/LargeCard";
import Footer from "../components/Footer";
import React, { useState } from "react";

export default function Home({ exploreData, liveAnywhereData }) {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="">
      <Head>
        <title>Airbnb is Back !!</title>
        <link rel="icon" href="/favicon.ico" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@500&display=swap"
          rel="stylesheet"
        ></link>
      </Head>

      <Header searchInput={searchInput} setSearchInput={setSearchInput} />
      <Banner searchInput={searchInput} />

      <main className="font-inter max-w-7xl mx-auto px-8 md:px-16">
        <section className="pt-10">
          <h2 className="text-3xl font-semibold pb-5">Explore Nearby -</h2>

          <div className="grid grid-col-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 shadow-xl rounded-md">
            {exploreData?.map((item, index) => (
              <SmallCard
                img={item.img}
                distance={item.distance}
                location={item.location}
                key={index}
              />
            ))}
          </div>
        </section>

        <section className="pt-10">
          <h2 className="text-3xl font-semibold py-8">Live Anywhere</h2>

          <div className="flex space-x-4 overflow-scroll scrollbar-hide px-2 py-3 ml-3">
            {liveAnywhereData.map((item, index) => (
              <MediumCard img={item.img} key={index} title={item.title} />
            ))}
          </div>
        </section>

        <LargeCard
          img="https://links.papareact.com/4cj"
          title="The Greatest Outdoors"
          desc="Wishlists created by AirBnb"
          buttonText="Get Inspired"
        />
      </main>

      <Footer />
    </div>
  );
}

export async function getStaticProps() {
  const exploreData = ExploreData;
  const liveAnywhereData = liveAnywhere;
  return { props: { exploreData, liveAnywhereData } };
}
