import { Search, ShoppingBag } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <section className="max-w-full flex mt-10 items-center justify-between gap-50 ml-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img
          src="src/assets/logo-img.png"
          alt="logo"
          className="h-14 w-14 object-contain"
        />
        <h1 className="text-white text-4xl font-bold">FloraVision.</h1>
      </div>

      {/* Nav Links */}
      <ul className="text-white flex flex-1  justify-center items-center text-lg gap-14">
        <li
          className="cursor-pointer hover:text-green-300 transition"
          style={{ fontFamily: "Indie Flower" }}
        >
          Home
        </li>
        <li
          className="cursor-pointer hover:text-green-300 transition"
          style={{ fontFamily: "Indie Flower" }}
        >
          Plants Type
        </li>
        <li
          className="cursor-pointer hover:text-green-300 transition"
          style={{ fontFamily: "Indie Flower" }}
        >
          More
        </li>
        <li
          className="cursor-pointer hover:text-green-300 transition"
          style={{ fontFamily: "Indie Flower" }}
        >
          Contacts
        </li>
      </ul>

      {/* Icons */}
      <div className="flex text-white items-center gap-8">
        <button className="hover:text-green-300 transition">
          <Search />
        </button>
        <button className="hover:text-green-300 transition">
          <ShoppingBag />
        </button>
        <button className="hover:text-green-300 transition">☰</button>
      </div>
    </section>
  );
};

export default Navbar;
