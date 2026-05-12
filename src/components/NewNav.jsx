import { Search, ShoppingBag, Menu, ChevronDown } from "lucide-react";
import React from "react";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between px-10 py-5">
      {/* Logo */}
      <div className="flex items-center gap-3">
        <img src="/logo.png" alt="logo" className="h-14 object-contain" />

        <h1 className="text-white text-4xl font-bold">FloraVision.</h1>
      </div>

      {/* Nav Links */}
      <ul
        className="text-white flex items-center text-2xl gap-16"
        style={{ fontFamily: "Indie Flower" }}
      >
        <li className="cursor-pointer hover:text-green-300 transition">Home</li>

        <li className="flex items-center gap-2 cursor-pointer hover:text-green-300 transition">
          Plants Type
          <ChevronDown size={16} />
        </li>

        <li className="cursor-pointer hover:text-green-300 transition">More</li>

        <li className="cursor-pointer hover:text-green-300 transition">
          Contacts
        </li>
      </ul>

      {/* Icons */}
      <div className="flex text-white items-center gap-8">
        <button className="hover:text-green-300 transition">
          <Search size={28} />
        </button>

        <button className="hover:text-green-300 transition">
          <ShoppingBag size={28} />
        </button>

        <button className="hover:text-green-300 transition">
          <Menu size={32} />
        </button>
      </div>
    </div>
  );
};

export default Navbar;
