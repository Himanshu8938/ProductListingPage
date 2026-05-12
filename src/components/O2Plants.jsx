import { ChevronLeft, ChevronRight, ShoppingBag } from "lucide-react";
import React from "react";

const O2Plants = () => {
  return (
    <section className="text-white mt-20 mx-5">
      <h1 className="text-4xl text-white flex justify-center">Our Best o2</h1>
      <div className="h-100 bg-white/10 rounded-3xl mx-6 mt-20 relative">
        <div className="w-1/2 float-right my-20 mr-8">
          <h2 className="text-2xl font-semibold">
            We Have Small And Best O2 Plants Collection’s
          </h2>
          <p className="mt-2">
            Oxygen-producing plants, often referred to as "O2 plants," are those
            that release oxygen into the atmosphere through the process of
            photosynthesis.
          </p>
          <p className="mt-2">
            Many plants can help filter out pollutants and toxins from the air,
            such as formaldehyde, benzene, and trichloroethylene. This makes the
            air cleaner and healthier to breathe.
          </p>
          <div className="flex items-center">
            <button className="border border-white rounded-xl px-3 py-1">
              Explore
            </button>
            <span className="flex">
              <ChevronLeft />
              <span>
                01/<span>04</span>
              </span>
              <ChevronRight />
            </span>
          </div>
        </div>
        <div className="absolute -top-18  left-8">
          <img src="src\assets\hero-img.png" alt="" className="h-120 w-120" />
        </div>
      </div>
      <div className="flex items-center justify-center gap-2 mt-10">
        <div className="w-6 h-1 rounded-full bg-white" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
        <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
      </div>
    </section>
  );
};

export default O2Plants;
