import React from "react";
import logo from "../assets/logo-img.png";

const Footer = () => {
  return (
    <section className="grid md:grid-cols-3 gap-20  text-white mx-5 mt-25">
      <div>
        <div className="flex items-center gap-3">
          <img src={logo} alt="logo" className="h-14 object-contain" />

          <h1 className="text-white text-4xl font-bold">FloraVision.</h1>
        </div>
        <p className="mt-4">
          "From lush indoor greens to vibrant outdoor blooms, our plants are
          crafted to thrive and elevate your living environment."
        </p>
        <div className="flex justify-between items-center mt-15 w-30">
          <span>FB</span>
          <span>TW</span>
          <span>Ll</span>
        </div>
      </div>
      <div className="justify-items-center">
        <div>
          <p>Quick Link’s</p>
          <p className="pt-6 underline">Home</p>
          <p className="underline">Type’s Of plant’s</p>
          <p className="underline">Contact</p>
          <p className="underline">Privacy</p>
        </div>
      </div>
      <div>
        <p>For Every Update.</p>
        <div className="relative pt-6">
          <input
            placeholder="Enter Email"
            className="border px-3 py-1 w-full"
          />
          <button className="absolute right-0.5 top-7 bg-white text-black">
            Subscribe
          </button>
        </div>
        <p className="mt-30">FloraVision © all right reserve</p>
      </div>
    </section>
  );
};

export default Footer;
