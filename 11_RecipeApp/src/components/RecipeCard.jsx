import React from "react";
import { NavLink } from "react-router-dom";
const RecipeCard = ({ details }) => {
  return (
    <div className="flex flex-wrap justify-center mt-6 xl:mx-[100px] ">
      {details.map((item, index) => (
        <div key={index} className="m-4 shadow-2xl shadow-gray-700 p-5 flex flex-col justify-center bg-gray-600 rounded-lg ">
          <img
            src={item.strMealThumb}
            alt={item.strMeal || "Recipe"}
            className="h-56 w-56 rounded-lg object-cover"
          />
          <h2 className="text-center mt-2 font-bold text-lg text-white">{item.strMeal}</h2>
        <NavLink to={`/${item.idMeal}`}>
        <button className="bg-yellow-400 w-[50%] mx-auto p-2 font-extrabold rounded-lg mt-3 text-black "
          >
            View Recipe
          </button>
        </NavLink>
        </div>
      ))}
    </div>
  );
};

export default RecipeCard;
