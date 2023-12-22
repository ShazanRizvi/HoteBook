import React from "react";
import { AppNavbar } from "../components/Navbar";
import { Typography } from "@material-tailwind/react";
import Search from "../components/Search";
import AppHero from "../components/AppHero";

import PopularHotels from "../components/PopularHotels";

const LandingPage = () => {
  return (
    
      <section className="w-full md:grid-cols-2 items-center max-w-6xl mx-auto">
        <AppNavbar />
        <AppHero />
        <Search />
        <PopularHotels />
      </section>
    
  );
};

export default LandingPage;
