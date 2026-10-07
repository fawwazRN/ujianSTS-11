import React from "react";
import { NavLink } from "react-router";

export default function Header() {
  const navWeb = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Testimony", href: "/Testimony" },
    { name: "FAQ", href: "/FAQ" },
  ];
  return (
    <div className="flex justify-between items-center p-5 px-20">
      <div className="flex gap-5">
        <h1 className="font-bold text-4xl">Logo</h1>
        <div className="bg-gray-500 rounded-full w-0.5 h-10"></div>
      </div>

      <nav className="flex justify-between gap-20">
        {navWeb.map((data, index) => (
          <NavLink
            to={data.href}
            key={index}
            className={
              "focus:font-bold hover:font-bold focus:px-2 focus:py-1 focus:bg-black focus:text-white focus:rounded-sm transition-all duration-300"
            }>
            {data.name}
          </NavLink>
        ))}
      </nav>
      <button className="bg-black px-8 py-3 rounded-md text-white">
        Sign In
      </button>
    </div>
  );
}
