import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import ErrorImg from '../assets/data.png'
const RecipeInfo = () => {
  const [info, setInfo] = useState(null);
  const { mealid } = useParams();

  // Fetch meal info
  const fetchInfo = async () => {
    try {
      const url = await fetch(`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealid}`);
      const data = await url.json();
      if (data.meals) {
        setInfo(data.meals[0]);
      } else {
        setInfo(null);
      }
    } catch (error) {
      console.error("Error fetching data:", error);
      setInfo(null);
    } 
  };

  useEffect(() => {
    fetchInfo();
  }, [mealid]);

  return (
    <div className="min-h-screen bg-[#2A2A3D] p-5 ">
      {!info ? (
        <div className="flex justify-center items-center h-screen flex-col">
            <img src={ErrorImg} alt="" className="h-[500px] w-[500px]"/>
        </div>
      ) : (
        <div className="grid md:grid-cols-2 gap-10 mt-10 place-items-center max-w-5xl mx-auto bg-transparent shadow-lg rounded-lg overflow-hiddenb p-8 border-4 border-gray-500 ">
          {/* Recipe Image */}
          <img
            src={info.strMealThumb}
            alt={info.strMeal}
            className="h-full w-full object-cover md:max-w-md rounded-t-lg md:rounded-l-lg md:rounded-t-none shadow-2xl shadow-gray-600"
          />

          {/* Recipe Details */}
          <div className="flex flex-col justify-center items-start p-6 md:border-l-2 md:border-gray-600">
            <h2 className="text-2xl font-bold text-gray-800 bg-orange-500  px-4 py-2 rounded-lg mb-4">
              {info.strMeal}
            </h2>
            <p className="text-gray-400 text-md leading-relaxed mb-5">
              {info.strInstructions}
            </p>
            <div className="flex flex-wrap gap-2">
              <span className="bg-blue-400 text-sm font-semibold text-black px-3 py-1 rounded-lg">
                Category: {info.strCategory || "N/A"}
              </span>
              <span className="bg-green-300 text-sm font-semibold text-green-900 px-3 py-1 rounded-lg">
                Area: {info.strArea || "N/A"}
              </span>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RecipeInfo;
