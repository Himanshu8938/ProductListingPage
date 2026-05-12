import {
  ChevronLeft,
  ChevronRight,
  CirclePlay,
  Star,
  StarHalf,
} from "lucide-react";
import React from "react";
import heroImg from "../assets/hero-img.png";
import proImg from "../assets/profile-img.png";

const HeroSection = () => {
  return (
    <section className="mt-30 mx-5">
      <div className="grid md:grid-cols-2 text-white gap-30">
        <div className="pt-10 relative">
          <h1 className="text-7xl">Earth’s Exhale</h1>
          <p className="font-extralight mt-1">
            "Earth Exhale" symbolizes the purity and vitality of the Earth's
            natural environment and its essential role in sustaining life.
          </p>
          <div className="flex items-center mt-2 gap-2">
            <button className="border border-white rounded-xl px-3 py-1">
              Buy Now
            </button>
            <span>
              <CirclePlay />
            </span>
            <span style={{ fontFamily: "Indie Flower" }}>Live Demo..</span>
          </div>
        </div>
        <div>
          <div className="md:float-right  bg-white/5 rounded-2xl px-4 py-4">
            <img src={heroImg} alt="" className="h-60 w-60 -mt-20" />
            <div className="px-6">
              <p className="text-white/70">Indoor Plant</p>
              <div className="flex items-center gap-6">
                <h5 className="text-2xl font-light">Aglaonema plant</h5>
                <span>
                  <ChevronRight />
                </span>
              </div>
              <button className="border border-white rounded-xl px-3 py-1 mt-2">
                Buy Now
              </button>
            </div>
            <div className="flex items-center justify-center gap-2 mt-10">
              <div className="w-6 h-1 rounded-full bg-white" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
              <div className="w-1.5 h-1.5 rounded-full bg-white/50" />
            </div>
          </div>
        </div>
      </div>
      <div className="text-white w-80 bg-white/5 rounded-2xl px-4 py-3 absolute md:top-120 left-10">
        <div className="flex items-center gap-2">
          <img src={proImg} alt="" className="w-10 h-10 rounded-full" />
          <div>
            <h1>Ronnie Hamill</h1>
            <span className="flex">
              <Star fill="yellow" strokeWidth={0} size={20} />
              <Star fill="yellow" strokeWidth={0} size={20} />
              <Star fill="yellow" strokeWidth={0} size={20} />
              <Star fill="yellow" strokeWidth={0} size={20} />
              <StarHalf fill="yellow" strokeWidth={0} size={20} />
            </span>
          </div>
        </div>
        <p>
          I can't express how thrilled I am with my new natural plants! They
          bring such a fresh and vibrant energy to my home.
        </p>
      </div>
    </section>
  );
};

export default HeroSection;
