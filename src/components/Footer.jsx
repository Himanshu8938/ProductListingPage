import React from "react";

const Footer = () => {
  return (
    <section className="flex justify-between items-center  text-white mx-5">
      <div className="w-1/3 mt-15">
        <div className="flex items-center gap-3">
          <img
            src="src/assets/logo-img.png"
            alt="logo"
            className="h-14 object-contain"
          />

          <h1 className="text-white text-4xl font-bold">FloraVision.</h1>
        </div>
        <p>
          "From lush indoor greens to vibrant outdoor blooms, our plants are
          crafted to thrive and elevate your living environment."
        </p>
        <div className="flex justify-between items-center mt-15 w-30">
          <span>FB</span>
          <span>TW</span>
          <span>Ll</span>
        </div>
      </div>
      <div className="w-1/3  justify-items-center">
        <div>
          <p>Quick Link’s</p>
          <p className="pt-6 underline">Home</p>
          <p className="underline">Type’s Of plant’s</p>
          <p className="underline">Contact</p>
          <p className="underline">Privacy</p>
        </div>
      </div>
      <div className="w-1/3">
        <p className="mt-10">For Every Update.</p>
        <div className="relative">
          <input
            placeholder="Enter Email"
            className="border px-3 py-1 w-full"
          />
          <button className="absolute right-0.5 top-1 bg-white text-black">
            Subscribe
          </button>
        </div>
        <p className="mt-24">FloraVision © all right reserve</p>
      </div>
    </section>
  );
};

export default Footer;
