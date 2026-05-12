import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "./assets/vite.svg";
import heroImg from "./assets/hero.png";
import Navbar from "./components/Navbar";
import HeroSection from "./components/HeroSection";
import TrendyPlantsSection from "./components/TrendyPlantsSection";
import TopSellingPlant from "./components/TopSellingPlant";
import O2Plants from "./components/O2Plants";

import Footer from "./components/Footer";
import CustomerReview from "./components/CustomerReview";
import bgImg from "./assets/bg-img.jpg";

function App() {
  return (
    <div className="m-0 p-0 overflow-x-hidden">
      <img src={bgImg} className="object-cover w-full h-420  relative" />
      <div className="absolute top-0">
        <Navbar />
        <HeroSection />
        <TrendyPlantsSection />
      </div>
      <div className="bg-[#1B2316] my-0 py-0 relative">
        <TopSellingPlant />
        <CustomerReview />
        <O2Plants />
        <Footer />
      </div>
    </div>
  );
}

export default App;
