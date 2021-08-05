import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Search() {
  const [searchInput, setSearchInput] = useState("");
  return (
    <div className="h-screen">
      <Header searchInput={searchInput} setSearchInput={setSearchInput} />

      <main className="flex"></main>
        <section><p>300+ Stays</p></section>
      <Footer />
    </div>
  );
}

export default Search;
