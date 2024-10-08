import React from "react";
import { Link } from "react-router-dom";
import { logo } from "../assets";

export default function Header() {
  return (
    <header className="w-full flex justify-between items-center bg-white sm:px-8 px-4 py-1 border-b border-b-[#e6ebf4]">
      <Link to="/">
        <img  src={logo} alt="logo" className="w-28 object-contain" />
      </Link>

      <Link to="/create-post">
        <button className="font-inter font-medium bg-[#6469ff] text-white px-4 py-2 rounded-md hover:text-black hover:bg-gray-400">
          Create
        </button>
      </Link>
    </header>
  );
}
