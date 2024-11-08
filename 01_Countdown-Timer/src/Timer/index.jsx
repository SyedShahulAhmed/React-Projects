import React, { useState, useEffect } from "react";

const Timer = ({ duration }) => {
  const [Time, setTime] = useState(duration);

  useEffect(() => {
    setTimeout(() => {
      setTime(Time - 1000);
    }, 1000);
  }, [Time]);

  const FormattedTime = (Milliseconds) => {
    let Seconds = parseInt(Math.floor(Milliseconds / 1000));
    let Minutes = parseInt(Math.floor(Seconds / 60));
    let Hours = parseInt(Math.floor(Minutes / 60));
    let day = parseInt(Math.floor(Hours / 24));

    let sec = parseInt(Seconds % 60);
    let min = parseInt(Minutes % 60);
    let hour = parseInt(Hours % 60);

    return (
      <div className="flex justify-between items-center gap-3 bg-transparent border-2 shadow-md shadow-black border-black text-lg p-6">
        <div className="p-3 bg-transparent border-2  text-3xl text-white  rounded-full h-[100px] w-[100px] flex justify-center items-center shadow-md shadow-black border-black">
          {day}d
        </div>
        <div className="p-3 bg-transparent border-2  text-3xl text-white  rounded-full h-[100px] w-[100px] flex justify-center items-center shadow-md shadow-black border-black">
          {hour}h
        </div>
        <div className="p-3 bg-transparent border-2  text-3xl text-white  rounded-full h-[100px] w-[100px] flex justify-center items-center shadow-md shadow-black border-black">
          {min}m
        </div>
        <div className="p-3 bg-transparent border-2  text-3xl text-white  rounded-full h-[100px] w-[100px] flex justify-center items-center shadow-md shadow-black border-black">
          {sec}s
        </div>
      </div>
    );
  };
  return (
      <div className="flex justify-center flex-col items-center gap-7">
        <h1 className="text-4xl text-white">Countdown Timer</h1>
        <div className=" p-1 rounded-lg">{FormattedTime(Time)}</div>
      </div>
  );
};

export default Timer;
