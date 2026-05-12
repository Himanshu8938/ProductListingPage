import { ShoppingBag, Store } from "lucide-react";
import React from "react";

const TrendyPlantsSection = () => {
  return (
    <section className="text-white mt-50">
      <h1 className="text-4xl text-white flex justify-center">
        Our Trendy Plants
      </h1>
      <div className="h-60 bg-white/10 rounded-3xl mx-6 mt-25 relative">
        <div className="w-1/2 float-right my-10 mr-8">
          <h2 className="text-2xl font-semibold">For Your Desks Decorations</h2>
          <p>
            I recently added a beautiful desk decoration plant to my workspace,
            and it has made such a positive difference!
          </p>
          <h2 className="text-2xl font-semibold">Rs. 599/-</h2>
          <div className="flex items-center gap-4 mt-3">
            <button className="border border-white rounded-xl px-3 py-1">
              Explore
            </button>
            <span className="px-2 py-1 border border-white">
              <ShoppingBag />
            </span>
          </div>
        </div>
        <div className="absolute -top-18  left-8">
          <img src="src/assets/trendyPlant1.png" alt="" className="h-80 w-80" />
        </div>
      </div>
      <div className="h-60 bg-white/10 rounded-3xl mx-6 mt-30 relative">
        <div className="w-1/2 pt-10 ml-8">
          <h2 className="text-2xl font-semibold">For Your Desks Decorations</h2>
          <p>
            The greenery adds a touch of nature and serenity to my desk, making
            it feel more inviting and calming
          </p>
          <h2 className="text-2xl font-semibold">Rs. 399/-</h2>
          <div className="flex items-center gap-4 mt-3">
            <button className="border border-white rounded-xl px-3 py-1">
              Explore
            </button>
            <span className="px-2 py-1 border border-white">
              <ShoppingBag />
            </span>
          </div>
        </div>
        <div className="absolute -top-18  right-8">
          <img src="src/assets/trendyPlant2.png" alt="" className="h-80 w-80" />
        </div>
      </div>
    </section>
  );
};

export default TrendyPlantsSection;
