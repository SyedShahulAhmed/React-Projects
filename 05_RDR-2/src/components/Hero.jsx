import React, { useState } from "react";
import arrow from "../assets/Arrow.png";
const Hero = ({ HeroData, heroCount, setheroCount}) => {
  return (
    <div className="my-0 mx-[120px] mt-[250px]">
      <div className="text-white text-[70px] font-semibold ">
        <p className={heroCount===0 ?"text-black":"text-white"}>{HeroData.text1}</p>
        <p className={heroCount===0?"text-black":"text-white "}>{HeroData.text2}</p>
      </div>
      <div className="flex items-center gap-[15px] mt-6 w-fit py-1 px-2 pl-8 rounded-3xl bg-white cursor-pointer">
        <p className="text-[18px] font-semibold ">Start Your Adventure</p>
        <img src={arrow} alt="" className="h-[50px]
        w-[50px] bg-white rounded-3xl border-2 border-black
        "/>
      </div>
      <div>
        <ul className=" flex items-center gap-6 mt-8 ml-3">
          <li
            onClick={() => setheroCount(0)}
            className={heroCount === 0 ? "bg-red-500 w-[15px] h-[15px] rounded-3xl cursor-pointer " : "bg-black w-[15px] h-[15px] rounded-3xl cursor-pointer "}
          >
            
          </li>
          <li
            onClick={() => setheroCount(1)}
            className={heroCount === 1 ? "bg-red-500 w-[15px] h-[15px] rounded-3xl cursor-pointer " : "bg-black w-[15px] h-[15px] rounded-3xl cursor-pointer "}
          >
            
          </li>
          <li
            onClick={() => setheroCount(2)}
            className={heroCount === 2 ? "bg-red-500 w-[15px] h-[15px] rounded-3xl cursor-pointer " : "bg-black w-[15px] h-[15px] rounded-3xl cursor-pointer "}
          >
            
          </li>
          <li
            onClick={() => setheroCount(3)}
            className={heroCount === 3 ? "bg-red-500 w-[15px] h-[15px] rounded-3xl cursor-pointer " :"bg-black w-[15px] h-[15px] rounded-3xl cursor-pointer "}>
            
          </li>
          <li
            onClick={() =>setheroCount(4)}
            className={heroCount === 4 ? "bg-red-500 w-[15px] h-[15px] rounded-3xl cursor-pointer " : "bg-black w-[15px] h-[15px] rounded-3xl cursor-pointer "}
          >
            
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Hero;
