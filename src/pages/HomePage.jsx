import React from "react";
import Hero from "../components/LandingPage/Hero";
import Navbar from "../components/LandingPage/Navbar";
import Problem from "../components/LandingPage/Problem";
import Categories from "../components/LandingPage/Categories";
import Hierarchy from "../components/LandingPage/Hierarchy";
import Features from "../components/LandingPage/Features";
import Footer from "../components/LandingPage/Footer";
import CitizenReporting from "../components/CitizenReporting";

function Home() {
  return (
    <div>
      <Navbar />
      <Hero />
      <Categories />
      <Problem />
      <Hierarchy />
      <Features />
      <Footer />
    </div>
  );
}

export default Home;
