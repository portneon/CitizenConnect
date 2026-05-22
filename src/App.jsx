import React from "react";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Problem from "./components/Problem";
import Categories from "./components/Categories";
import Hierarchy from "./components/Hierarchy";
import Features from "./components/Features";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white font-serif text-[#0e0c17]">
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

export default App;
