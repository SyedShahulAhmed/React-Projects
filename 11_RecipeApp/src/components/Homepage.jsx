import React, { useState } from 'react';
import RecipeCard from './RecipeCard';
import search from '../assets/search.png'
const Homepage = () => {
  const [meal, setMeal] = useState([]); 
  const [user, setUser] = useState('');

  const Api = async () => {
    if (!user.trim()) { // Prevents API call for empty or whitespace input
      alert('Please enter a dish name!');
      return;
    }

    try {
      const url = await fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${user}`);
      const data = await url.json();

      if (data.meals) {
        setMeal(data.meals);
      } else {
        setMeal([]); 
        alert('No recipes found. Try another search!');
      }
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  };

  const handleSearch = (e) => {
    setUser(e.target.value);
  };

  const handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      Api(); 
    }
  };

  return (
    <div className="min-h-screen bg-gray-800 p-5">
      {/* Search Section */}
      <div className="flex justify-center mt-[70px]  flex-col items-center p-7 w-[400px] mx-auto md:w-[600px] rounded-lg  bg-[#1E1E2F] shadow-2xl  " >
        <h1 className="text-2xl font-bold mb-4 md:text-3xl text-[#EAEAEA]">Flavor<span className='text-yellow-600'>Sphere</span></h1>
        <div className="flex border-2 border-gray-500 rounded-lg w-[350px] md:w-[550px] overflow-hidden py-3  justify-between px-2 items-center focus-within:border-[#6A5ACD]">
          <input x
            type="text"
            placeholder="Find your next favorite dish..."
            className="p-4 text-md outline-none w-[80%] text-lg bg-transparent text-white 
            placeholder:text-gray-300
            "
            onChange={handleSearch}
            onKeyDown={handleKeyPress} 
            value={user}
          />
          <button
            className="bg-[#DBE9EE] text-white p-2 hover:bg-[#dbe9eea0] transition-colors rounded-full h-12 w-12"
            onClick={Api}
          >
            <img src={search} alt=""  className='h-8 w-8 ' />
          </button>
        </div>
      </div>

      {/* Recipe Card Section */}
      <div className="mt-10">
        <RecipeCard details={meal} />
      </div>
    </div>
  );
};

export default Homepage;
