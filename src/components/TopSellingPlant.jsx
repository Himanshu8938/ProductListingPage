import { ChevronRight, ShoppingBag } from "lucide-react";
import React from "react";
import tsp1 from "../assets/hero-img.png";
import tsp2 from "../assets/trendyPlant1.png";
import tsp3 from "../assets/cactus.png";
import tsp4 from "../assets/tsp4.png";
import tsp5 from "../assets/tsp5.png";
import tsp6 from "../assets/tsp6.png";

const TopSellingPlant = () => {
  return (
    <section className="text-white mx-5 my-0">
      <h1 className="flex justify-center text-4xl text-white pt-10">
        Our Top Selling Plants
      </h1>
      <div className="grid md:grid-cols-3 gap-30 mx-4 my-18">
        <div className="bg-white/5 rounded-2xl w-80 h-90">
          <img src={tsp1} alt="" className="h-60 w-60 -mt-16 mx-6" />
          <div className="px-6">
            <h5 className="text-2xl font-light">Aglaonema plant</h5>
            <p className="font-extralight">
              The Aglaonema plant, commonly known as Chinese Evergreen known for
              its attractive foliage and ease of care
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl">Rs. 300/-</span>
              <span className="border border-white/50 rounded-sm px-2 py-1">
                <ShoppingBag />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl w-80 h-90">
          <img src={tsp2} alt="" className="h-60 w-60 -mt-16 mx-6" />
          <div className="px-6">
            <h5 className="text-2xl font-light">Plantain Lilies</h5>
            <p className="font-extralight">
              Hostas are primarily grown for their lush, decorative leaves,
              which come in a wide variety of shapes, sizes,
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl">Rs. 380/-</span>
              <span className="border border-white/50 rounded-sm px-2 py-1">
                <ShoppingBag />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl w-80 h-90">
          <img src={tsp3} alt="Cactus" className="h-60 w-60 -mt-16 mx-10" />
          <div className="px-6">
            <h5 className="text-2xl font-light">Cactus</h5>
            <p className="font-extralight">
              It is known for their ability to thrive in arid environments
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl">Rs. 259/-</span>
              <span className="border border-white/50 rounded-sm px-2 py-1">
                <ShoppingBag />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl w-80 h-90">
          <img
            src={tsp4}
            alt="Swiss cheese Plant"
            className="h-60 w-60 -mt-16 mx-6"
          />
          <div className="px-6">
            <h5 className="text-2xl font-light">Swiss cheese Plant</h5>
            <p className="font-extralight">
              It is a popular tropical houseplant known for its distinctive,
              perforated leaves
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl">Rs. 400/-</span>
              <span className="border border-white/50 rounded-sm px-2 py-1">
                <ShoppingBag />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl w-80 h-90">
          <img
            src={tsp5}
            alt="Sansevieria plant"
            className="h-60 w-60 -mt-16 mx-6"
          />
          <div className="px-6">
            <h5 className="text-2xl font-light">Sansevieria plant</h5>
            <p className="font-extralight">
              It is a popular indoor plant admired for its striking appearance
              and low-maintenance nature.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl">Rs. 450/-</span>
              <span className="border border-white/50 rounded-sm px-2 py-1">
                <ShoppingBag />
              </span>
            </div>
          </div>
        </div>
        <div className="bg-white/5 rounded-2xl w-80 h-90">
          <img
            src={tsp6}
            alt="Agave plant"
            className="h-60 w-60 -mt-16 mx-10"
          />
          <div className="px-6">
            <h5 className="text-2xl font-light">Agave plant</h5>
            <p className="font-extralight">
              The Agave plant is a genus of succulent plants known for their
              striking rosette of thick, fleshy leaves and architectural forms.
            </p>
            <div className="flex justify-between items-center">
              <span className="text-xl">Rs. 359/-</span>
              <span className="border border-white/50 rounded-sm px-2 py-1">
                <ShoppingBag />
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopSellingPlant;
