import React, { useState } from "react";
import Data from "./data.js";

const Accordion = () => {
  const [Select, setSelect] = useState(null);
  const [Enable, setEnable] = useState(false);
  const [Multi, setMulti] = useState([]);


  function singleSelection(currentId) {
    setSelect(currentId === Select ? null : currentId);
  }
  function MultiSelection(currentId) {
    let Copy = [...Multi];
    const findIndex = Copy.indexOf(currentId);

    if (findIndex === -1) {
      Copy.push(currentId); 
    } else {
      Copy.splice(findIndex, 1); 
    }
    setMulti(Copy); 
  }

  return (
    <div>
      <h1 className="text-center text-3xl font-bold mb-3 text-orange-500">Accordion</h1>
      <div className="flex flex-col justify-center w-[500px]   text-white">
        {Data && Data.length > 0 ? (
          Data.map((dataItem) => (
            <div key={dataItem.id} className="mb-2 bg-blue-400">
              <div
                onClick={
                  Enable
                    ? () => MultiSelection(dataItem.id)
                    : () => singleSelection(dataItem.id) 
                }
                className="flex justify-between p-[15px] mb-2 cursor-pointer"
              >
                <h1 className="text-black font-semibold">{dataItem.question}</h1>
                <span className="text-2xl">{Select === dataItem.id || Multi.includes(dataItem.id) ? "-" : "+"}</span>
              </div>
              {(Select === dataItem.id || Multi.includes(dataItem.id)) && (
                <div className="px-[15px] pb-[15px]">{dataItem.answer}</div>
              )}
            </div>
          ))
        ) : (
          <div>Data not found!</div>
        )}

        {}
        <button
          className="text-white my-3 mx-[100px] py-2  rounded-lg bg-blue-600 hover:bg-blue-700"
          onClick={() => setEnable(!Enable)} 
        >
          {Enable ? "Disable Multi-Select" : "Enable Multi-Select"}
        </button>
      </div>
    </div>
  );
};

export default Accordion;
