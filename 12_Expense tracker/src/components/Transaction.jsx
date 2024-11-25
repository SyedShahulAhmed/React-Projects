import React, { useContext } from "react";
import { GlobalContext } from "../Context/GlobalState";

const Transaction = ({ transactions}) => {

    const {deleteTransaction} = useContext(GlobalContext)
  const sign = transactions.amount < 0 ? "-" : "+";

  return (
    <div className="relative">
      <li
        className={`group relative border-r-8 border-2 w-[300px] rounded-lg my-2 py-2 px-4 flex justify-between items-center ${
          transactions.amount < 0 ? "border-r-red-500" : "border-r-green-500"
        }`}
      >
        {/* Delete button (outside, appears on hover) */}
        <button
          className="absolute left-[-25px] text-red-500 bg-slate-200 p-2 font-bold opacity-0 group-hover:opacity-100 transition-opacity duration-200"
          onClick={() => deleteTransaction(transactions.id)}
        >
          X
        </button>

        {/* Transaction details */}
        <span className="text-sm capitalize text-gray-600 ">{transactions.text}</span>
        <div className="flex items-center">
          <span className="text-sm text-gray-600 font-semibold">
            {sign}${Math.abs(transactions.amount)}
          </span>
        </div>
      </li>
    </div>
  );
};

export default Transaction;
