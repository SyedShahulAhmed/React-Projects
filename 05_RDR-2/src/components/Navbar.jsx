import React from "react";
import Logo from '../assets/logo.png'

const Navbar = () => {
  return (
  <div className="flex justify-between items-center my-[40px] mx-[120px]">
    <div>
        <img src={Logo} alt="" className="h-[60px] "/>
    </div>
    <div className="flex items-center list-none gap-24 text-white">
        <li>Home</li>
        <li>Story</li>
        <li>Gameplay</li>
        <button className="rounded-3xl py-3 px-10 bg-red-600 text-black ">Buy now</button>
    </div>
  </div>);
};

export default Navbar;
