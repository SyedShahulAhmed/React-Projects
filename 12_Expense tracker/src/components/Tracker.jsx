import React from "react";
import Balance from "./Balance";

const Tracker = () => {
  return (
    <div className="flex justify-center mt-10">
      <div className="border-2 py-5 px-10 bg-slate-200">
        <h1 className="text-lg md:text-2xl font-bold tracking-wide text-center">Expense Tracker</h1>
        <Balance/>
      </div>
    </div>
  );
};

export default Tracker;
